<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Theme;

use Fluxtor\Converge\Enums\Layout;
use Fluxtor\Converge\Enums\MaxWidth;
use Fluxtor\Converge\Support\Themes;

class Theme
{
    protected ?Layout $layout = null;

    protected ?MaxWidth $maxWith = null;

    protected $darkModeCss;

    protected $lightModeCss;

    /**
     * layout
     *
     * @param  mixed  $name
     */
    public function layout(Layout $name): static
    {
        $this->layout = $name;

        return $this;
    }

    /**
     * getLayout
     */
    public function getLayout(): Layout
    {
        return $this->layout ?? Layout::Default;
    }

    /**
     * generate css root
     *
     * @param  mixed  $variables
     */
    public function theme(array $darkModeTheme = [], array $lightModeTheme = []): static
    {
        $this->darkModeCss = $this->rootCssGenerator($darkModeTheme);
        $this->lightModeCss = $this->rootCssGenerator($lightModeTheme);

        return $this;
    }

    /**
     * getDarkModeTheme
     */
    public function getDarkModeTheme(): string
    {
        return $this->darkModeCss ?? $this->defaultTheme(Themes::LIGHT);
    }

    /**
     * getLightModeTheme
     */
    public function getLightModeTheme(): string
    {
        return $this->lightModeCss ?? $this->defaultTheme(Themes::LIGHT);
    }

    /**
     * defaultTheme
     *
     * @param  mixed  $variables
     * @return void
     */
    private function defaultTheme(array $variables)
    {
        $default = $this->rootCssGenerator($variables);

        return $default;
    }

    /**
     * rootCssGenerator
     *
     * @param  mixed  $variables
     */
    public function rootCssGenerator(array $variables): string
    {
        $rootCss = ':root {';

        foreach ($variables as $property => $value) {
            $rootCss .= '    '.$property.': '.$value.';';
        }

        $rootCss .= '}';

        return $rootCss;
    }
}
