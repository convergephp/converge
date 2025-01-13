<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

class Module
{
    protected ?string $id = null;

    public function id(string $id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }
}
