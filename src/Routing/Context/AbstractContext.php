<?php

namespace Converge\Routing\Context;

use Converge\Routing\Context\Enums\Contexts;
use Converge\Routing\Contexts\Contracts\Context;

abstract class AbstractContext implements Context
{
    public function __construct(
        protected string $id,
        protected string $route,
        protected bool $isDefault = false,
        protected array $middleware = []
    ) {}

    public function getId(): string
    {
        return $this->id;
    }
    public function getRoute(): string
    {
        return $this->route;
    }
    public function isDefault(): bool
    {
        return $this->isDefault;
    }
    public function getMiddleware(): array
    {
        return $this->middleware;
    }
    abstract public function getType(): string | Contexts;
}
