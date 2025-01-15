<?php

namespace Fluxtor\Converge\Clusters;

class Cluster
{
    protected string $label;
    protected string $path;

    public function label(string $label)
    {
        $this->label = $label;
    }
    public function in(string $path)
    {
        $this->path = $path;
    }
    public function path(string $path)
    {
        $this->in($path);
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
