<?php

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Support\Metadata;

trait HasMetadata
{
    protected array $metadata = [];
    public function metadata(\Closure $callable): static
    {
        $metadata = new Metadata();
        $this->metadata = $callable($metadata, $metadata->getFrontMatter());
        return $this;
    }
}
