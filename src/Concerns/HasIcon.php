<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Converge\Enums\IconPosition;
use Converge\Enums\IconSize;
use Illuminate\Contracts\Support\Htmlable;
use Throwable;

trait HasIcon
{
    protected string|Closure|Htmlable|null $icon = null;

    protected string|Closure|Htmlable|null $openIcon = null;

    protected string|Closure|Htmlable|null $closeIcon = null;

    protected IconPosition|string|Closure|null $iconPosition = null;

    protected IconSize|string|Closure|null $iconSize = null;

    public function icon(string|Closure|null $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function openIcon(string|Closure|null $icon): static
    {
        $this->openIcon = $icon;

        return $this;
    }

    public function closeIcon(string|Closure|null $icon): static
    {
        $this->closeIcon = $icon;

        return $this;
    }

    public function iconPosition(IconPosition|string|Closure|null $position): static
    {
        $this->iconPosition = $position;

        return $this;
    }

    public function iconSize(IconSize|string|Closure|null $size): static
    {
        $this->iconSize = $size;

        return $this;
    }

    public function getIcon()
    {
        try {
            return $this->evaluteIcon($this->icon);
        } catch (Throwable $th) {
            return '"Invalid Icon name"';
        }
    }

    public function getOpenIcon()
    {

        return $this->evaluteIcon($this->openIcon);
    }

    public function getCloseIcon()
    {

        return $this->evaluteIcon($this->closeIcon);
    }

    public function evaluteIcon(string|Closure|Htmlable|null $icon)
    {
        if (($icon = $this->resolve($icon)) instanceof Htmlable) {
            return $icon->toHtml();
        }

        return $this->resolve($this->icon);
    }

    public function getIconPosition(): IconPosition|string
    {
        return $this->resolve($this->iconPosition) ?? IconPosition::Before;
    }

    public function getIconSize(): IconSize|string|null
    {
        return $this->resolve($this->iconSize);
    }
}
