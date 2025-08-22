<?php

namespace Converge\Routing\Contexts;

use Converge\Routing\Contexts\Contracts\Context;
use Illuminate\Support\Collection;

class ContextOrderingRule
{

    public function __construct(
        private array $typeOrder = [],
        private array $customRules = []
    ) {}

    /**
     * Default ordering rule
     */
    public static function default(): self
    {
        return new self([
            'base_url',     // /docs
            'version',     // /docs/v2
            'cluster',     // /docs/v2/api-reference
            'language',    // /docs/v2/api-reference/en
        ]);
    }

    /**
     * Alternative ordering for different scenarios
     */
    public static function versionFirst(): self
    {
        return new self([
            'base_url',
            'version',     // /v2/
            'language',    // /v2/en/
            'cluster',     // /v2/en/eu/
        ]);
    }

    public static function clusterFirst(): self
    {
        return new self([
            'base_url',
            'cluster',     // /eu/
            'language',    // /eu/en/
            'version',     // /eu/en/v2/
        ]);
    }

    /**
     * Create custom ordering with rules
     */
    public static function custom(array $typeOrder, array $customRules = []): self
    {
        return new self($typeOrder, $customRules);
    }

    /**
     * Sort contexts according to the defined order
     */
    public function sort(Collection $contexts): Collection
    {
        return $contexts->sortBy(function (Context $context) {
            $typeIndex = array_search($context->getType(), $this->typeOrder);

            // If type not found in order, put it at the end
            if ($typeIndex === false) {
                $typeIndex = count($this->typeOrder);
            }

            // Apply custom rules if any
            $customWeight = $this->getCustomWeight($context);

            return ($typeIndex * 1000) + $customWeight;
        })->values();
    }

    /**
     * Get weight from custom rules
     */
    private function getCustomWeight(Context $context): int
    {
        $type = $context->getType();
        $id = $context->getId();

        if (isset($this->customRules[$type][$id])) {
            return $this->customRules[$type][$id];
        }

        return 0;
    }

    /**
     * Add a custom rule for specific context instances
     */
    public function addCustomRule(string $type, string $id, int $weight): self
    {
        $this->customRules[$type][$id] = $weight;
        return $this;
    }
}
