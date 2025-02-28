<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Couchbase\PathNotFoundException;
use Fluxtor\Converge\Enums\HighlighterTheme;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;

trait Highlighter
{
    protected $highLightCss = null;

    /**
     * highlightTheme
     *
     * @param  mixed $theme
     * @return static
     */
    public function highlighterTheme($theme): static
    {
        $path = $theme ? $this->generatePath($theme) : $this->generatePath('night-owl');

        $this->highLightCss = $this->buildHighlightCss($path);

        return $this;
    }

    /**
     * buildHighlightCss
     *
     * @param  string $path
     * @return string
     */
    public function buildHighlightCss(string $path): string
    {

        if (! file_exists(filename: $path)) {
            throw new PathNotFoundException('Path not found');
        }

        return $this->highLightCss = file_get_contents(filename: $path);
    }


    /**
     * getHighlightTheme
     *
     * @return void
     */
    public function getHighlightTheme()
    {
        return $this->highLightCss ?? $this->buildHighlightCss($this->generatePath("night-owl"));
    }

    /**
     * generatePath
     *
     * @param  mixed $theme
     * @return string
     */
    private function generatePath(string $theme): string
    {
        return $path = dirname(__DIR__, 2).DIRECTORY_SEPARATOR.'resources'.DIRECTORY_SEPARATOR.'css'.DIRECTORY_SEPARATOR.'highlight-css'.DIRECTORY_SEPARATOR."{$theme}.css";
    }

}
