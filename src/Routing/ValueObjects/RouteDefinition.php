<?php

namespace Converge\Routing\ValueObjects;

use Converge\Routing\Collections\ContextCollection;
use Converge\Routing\Context\ContextCollection as ContextContextCollection;

readonly class RouteDefinition
{
    public function __construct(
        public string $uri,
        public string $name,
        public string $moduleId,
        public ContextContextCollection $contexts,
        public string $pattern = '.*',
        public array $additionalMiddleware = []
    ) {}

    public function getMiddleware(): array
    {
        $contextMiddleware = $this->contexts->getOrdered()
            ->flatMap(fn($context) => $context->getMiddleware())
            ->toArray();

        return array_merge(
            ["UseModule:{$this->moduleId}"],
            $contextMiddleware,
            $this->additionalMiddleware
        );
    }

    public function getContextIds(): array
    {
        return $this->contexts->getOrdered()
            ->map(fn($context) => $context->getId())
            ->toArray();
    }
}
