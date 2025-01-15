<?php

namespace Fluxtor\Converge\Concerns;


trait HasLabel
{
    protected string $label;

    public function label(string $label)
    {
        $this->label = $label;
        return $this;
    }

    public function getLabel()
    {
        return $this->label;
    }
}
