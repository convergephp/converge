<?php

namespace Converge\Routing\Contexts\Contracts;

use Converge\Routing\Context\Enums\Contexts;

interface Context
{
    public function getId(): string;
    public function getRoute(): string;
    public function isDefault(): bool;
    public function getMiddleware(): array;
    public function getType(): string|Contexts;
}
