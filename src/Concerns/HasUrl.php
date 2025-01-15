<?php

namespace Fluxtor\Converge\Concerns;


trait HasUrl
{
    protected string $url;

    public function url(string $url)
    {
        $this->url = $url;
        return $this;
    }

    public function getUrl()
    {
        return $this->url;
    }
}
