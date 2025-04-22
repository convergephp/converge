<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Enums\HighlighterName;

trait Highlighter
{
    protected $darkmodeHighlighterCss = null;

    protected $lightmodeHighlighterCss = null;

    /**
     * highlightTheme
     *
     * @param  mixed  $theme
     */
    public function highlighterTheme(?HighlighterName $darkmodeHighlighter = HighlighterName::Github_dark_default, ?HighlighterName $lightmodeHighlighter = HighlighterName::Github_light): static
    {
        $darkmodeHighlighterPath = $this->generatePath($darkmodeHighlighter->value);
        $lightmodeHighlighterPath = $this->generatePath($lightmodeHighlighter->value);

        $this->lightmodeHighlighterCss = $this->buildHighlightCss($lightmodeHighlighterPath);
        $this->darkmodeHighlighterCss = $this->buildHighlightCss($darkmodeHighlighterPath);

        return $this;
    }

    /**
     * buildHighlightCss
     */
    public function buildHighlightCss(string $path): string
    {
        if (! file_exists(filename: $path)) {
            return '';
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
        return $this->darkmodeHighlighterCss ?? $this->buildHighlightCss($this->generatePath(HighlighterName::Github_dark_default->value));
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
     * @param  mixed  $theme
     */
    private function generatePath(string $theme): string
    {
        return dirname(__DIR__, 2).DIRECTORY_SEPARATOR.'resources'.DIRECTORY_SEPARATOR.'css'.DIRECTORY_SEPARATOR.'highlight-css'.DIRECTORY_SEPARATOR."{$theme}.css";
    }
}
