<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

trait HasUrl
{
    protected string $url;

    public function url(string $url): static
    {
        $this->url = $url;

        return $this;
    }

    public function getUrl()
    {
        return $this->url;
    }
}
