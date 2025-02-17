<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Theme;

use Fluxtor\Converge\Concerns\HasFont;
use Fluxtor\Converge\Enums\Layout;
use Fluxtor\Converge\Enums\MaxWidth;
use Fluxtor\Converge\Enums\Spotlight;
use Fluxtor\Converge\Support\Themes;

class Theme
{
    use HasFont;

    protected ?Layout $layout = null;

    protected ?MaxWidth $maxWith = null;

    protected string $darkModeCss;

    protected string $lightModeCss;

    // protected bool $withSpotlight;

    protected ?Spotlight $spotlightName = null;

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

    /**
     * spotlight
     *
     * @param  mixed  $condition  default : true
     * @param  mixed  $name  e.g : grid (default) , 'hive'
     * @return void
     */
    public function spotlight(?Spotlight $name = Spotlight::Grid): static
    {
        $this->spotlightName = $name;

        return $this;
    }

    /**
     * getSpotlight
     */
    public function getSpotlight(): ?Spotlight
    {
        return $this->spotlightName;
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
}
