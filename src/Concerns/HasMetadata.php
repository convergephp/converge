<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Converge\Support\Metadata;

trait HasMetadata
{
    protected ?Metadata $metadata = null;

    public function metaTags(Closure $callable): static
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
