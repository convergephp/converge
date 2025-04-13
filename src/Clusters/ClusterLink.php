<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Clusters;

use Closure;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasUrl;
use Illuminate\Contracts\Support\Htmlable;

class ClusterLink
{
    use HasLabel;
    use HasSort;
    use HasUrl;

    protected string|Closure|Htmlable|null $icon = null;

    public function getUrl(): ?string
    {
        return $this->resolve($this->url);
    }

    public function getId()
    {
        return 'cluster-link';
    }

    public function icon(string|Closure|null $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function getIcon()
    {

        return $this->evaluteIcon($this->icon);
    }

    public function evaluteIcon(string|Closure|Htmlable|null $icon)
    {
        if (($icon = $this->resolve($icon)) instanceof Htmlable) {
            return $icon->toHtml();
        }

        return $this->resolve($this->icon);
    }
}
