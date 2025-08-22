<?php

namespace Converge\Routing\Context;

use Converge\Routing\Contexts\ContextOrderingRule;
use Converge\Routing\Contexts\Contracts\Context;
use Illuminate\Support\Collection;

class ContextCollection
{
    private Collection $contexts;
    private ContextOrderingRule $orderingRule;

    public function __construct(array $contexts = [], ?ContextOrderingRule $orderingRule = null)
    {
        $this->contexts = collect($contexts);
        $this->orderingRule = $orderingRule ?? ContextOrderingRule::default();
    }

    public function add(Context $context): self
    {
        $this->contexts->push($context);
        return $this;
    }

    public function getByType(string $type): Collection
    {
        return $this->contexts->filter(fn($c) => $c->getType() === $type);
    }

    public function getNonDefault(): Collection
    {
        return $this->contexts->filter(fn($c) => !$c->isDefault());
    }

    public function all(): Collection
    {
        return $this->contexts;
    }

    /**
     * Get contexts ordered according to the ordering rule
     */
    public function getOrdered(): Collection
    {
        return $this->orderingRule->sort($this->contexts);
    }

    /**
     * Get all possible combinations of contexts
     */
    public function getCombinations(): Collection
    {
        return $this->generateCombinations($this->contexts->toArray());
    }

    public function setOrderingRule(ContextOrderingRule $rule): self
    {
        $this->orderingRule = $rule;
        return $this;
    }

    private function generateCombinations(array $contexts): Collection
    {
        if (empty($contexts)) {
            return collect([new self([], $this->orderingRule)]);
        }

        $combinations = collect();
        $groupedByType = collect($contexts)->groupBy(fn($c) => $c->getType());

        // Generate cartesian product of all context types
        $typeKeys = $groupedByType->keys()->toArray();
        $this->cartesianProduct($groupedByType, $typeKeys, 0, collect(), $combinations);

        return $combinations->map(function($contextArray) {
            return new self($contextArray->toArray(), $this->orderingRule);
        });
    }

    private function cartesianProduct($grouped, $keys, $index, $current, &$result): void
    {
        if ($index === count($keys)) {
            $result->push($current->values());
            return;
        }

        $currentType = $keys[$index];
        foreach ($grouped[$currentType] as $context) {
            $newCurrent = $current->put($currentType, $context);
            $this->cartesianProduct($grouped, $keys, $index + 1, $newCurrent, $result);
        }
    }
}