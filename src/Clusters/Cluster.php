<?php

namespace Fluxtor\Converge\Clusters;

class Cluster
{
    protected string $label;
    protected string $path;
    // @todo add iconable support
    
    
    public function label(string $label)
    {
        $this->label = $label;
        return $this;
    }
    public function in(string $path)
    {
        $this->path = $path;
        return $this;
    }
    public function path(string $path)
    {
        $this->in($path);
        return $this;
    }
    public function getLabel()
    {
        return $this->label;
    }
    public function getPath()
    {
        return $this->path;
    }
}
