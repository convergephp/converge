<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Theme\Theme;

trait HasTheme
{
    protected Theme $theme;

    /**
     * theme
     *
     * @param  mixed  $callable
     */
    public function theme(Closure $callable): static
    {
        $theme = new Theme;

        $this->theme = $callable($theme);

        return $this;
    }

    public function getTheme(): Theme
    {
        return $this->theme;
    }
}
