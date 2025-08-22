<?php

namespace Converge\Routing\Contexts\Contracts;

interface ContextInterface
{
    public function getId(): string;
    public function getRoute(): string;
    public function isDefault(): bool;
    public function getMiddleware(): array;
    public function getType(): string; 
}
