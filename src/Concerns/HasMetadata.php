<?php

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Support\Metadata;

trait HasMetadata
{
    protected ?Metadata $metadata = null;

    public function metaTags(\Closure $callable): static
    {
        $metadata = resolve(Metadata::class);

        $this->metadata = $callable($metadata);

        return $this;
    }

    public function getMetaTags(): Metadata
    {
        return $this->metadata ?? resolve(Metadata::class);
    }
}
