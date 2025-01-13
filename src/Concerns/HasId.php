<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

trait HasId
{
    protected ?string $id = null;

    public function id(string $id)
    {
        $this->id = $id;

        return $this;
    }

    public function getId()
    {
        return $this->id;
    }
}
