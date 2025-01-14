<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

trait CanHandleDefault
{
    protected $isDefault = false;

    public function isDefault(): bool
    {
        return $this->isDefault;
    }

    public function default(bool $condition = true): static
    {
        $this->isDefault = $condition;

        return $this;
    }
}
