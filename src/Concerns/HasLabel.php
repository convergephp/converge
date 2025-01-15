<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

trait HasLabel
{
    protected string $label;

    public function label(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getLabel()
    {
        return $this->label;
    }
}
