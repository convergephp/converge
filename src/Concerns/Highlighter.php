<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Couchbase\PathNotFoundException;
use Fluxtor\Converge\Enums\HighlighterName;
use Fluxtor\Converge\Enums\HighlighterTheme;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;

trait Highlighter
{

    protected $darkmodeHighlighterCss = null;
    protected $lightmodeHighlighterCss = null;

    /**
     * highlightTheme
     *
     * @param  mixed $theme
     * @return static
     */
    public function highlighterTheme(?HighlighterName $darkmodeHighlighter = HighlighterName::Night_owl, ?HighlighterName $lightmodeHighlighter = HighlighterName::Github_light): static
    {
        $darkmodeHighlighterPath = $this->generatePath($darkmodeHighlighter->value);
        $lightmodeHighlighterPath = $this->generatePath($lightmodeHighlighter->value);

        $this->lightmodeHighlighterCss = $this->buildHighlightCss($lightmodeHighlighterPath);
        $this->darkmodeHighlighterCss = $this->buildHighlightCss($darkmodeHighlighterPath);

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
            return "";
        }

        return file_get_contents(filename: $path);
    }



    /**
     * getDarkmodeHighlighterCss
     *
     * @return void
     */
    public function getDarkmodeHighlighterCss(): string
    {
        return $this->darkmodeHighlighterCss ?? $this->buildHighlightCss($this->generatePath(HighlighterName::Night_owl->value));
    }

    /**
     * getLightmodeHighlighterCss
     *
     * @return void
     */
    public function getLightmodeHighlighterCss(): string
    {
        return $this->lightmodeHighlighterCss ?? $this->buildHighlightCss($this->generatePath(HighlighterName::Github_light->value));
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
