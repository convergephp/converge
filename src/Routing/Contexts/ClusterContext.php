<?php

namespace Converge\Routing\Context;

use Converge\Routing\Context\Enums\Contexts;

class ClusterContext extends AbstractContext
{
    public function __construct(
        string $id,
        string $route,
        bool $isDefault = false,
        private ?string $region = null
    ) {
        parent::__construct(
            $id,
            $route,
            $isDefault,
            middleware: ["UseCluster:{$id}"]
        );
    }

    public function getType(): string|Contexts
    {
        return Contexts::Cluster;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }
}
