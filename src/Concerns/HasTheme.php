<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Converge\Theme\Theme;

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

    /**
     * getTheme
     */
    public function getTheme(): Theme
    {
        return $this->theme ?? new Theme;
    }
}
