<?php

namespace Fluxtor\Converge\Clusters;

class VersionLink
{
    protected string $label;
    protected string $url;
    // @todo add iconable support


    public function label(string $label)
    {
        $this->label = $label;
        return $this;
    }
    public function url(string $url)
    {
        $this->url = $url;
        return $this;
    }

    public function getLabel()
    {
        return $this->label;
    }
    public function getUrl()
    {
        return $this->url;
    }
}
