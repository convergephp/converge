<?php

declare(strict_types=1);

namespace Converge\Theme;

use Converge\Concerns\HasCollapsedGroupes;
use Converge\Concerns\HasFavicon;
use Converge\Concerns\HasFont;
use Converge\Concerns\Highlighter;
use Converge\Concerns\Resolver;
use Converge\Enums\Layout;
use Converge\Enums\MaxWidth;
use Converge\Enums\Spotlight;
use Converge\Support\SidebarItemsStyles;
use Converge\Support\Themes;

class Theme
{
    use HasCollapsedGroupes;
    use HasFavicon;
    use HasFont;
    use Highlighter;
    use Resolver;

    protected ?Layout $layout = null;

    protected ?MaxWidth $maxWith = null;

    protected ?string $darkModeCss;

    protected ?string $lightModeCss;

    protected ?Spotlight $spotlightName = null;

    protected array $sidebarItemsStyle;

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
    public function theme(?array $darkModeTheme = null, ?array $lightModeTheme = null): static
    {
        // dd($darkModeTheme);

        $darkModeTheme ??= Themes::$DARK;
        $lightModeTheme ??= Themes::$LIGHT;

        $this->darkModeCss = $this->rootCssGenerator($darkModeTheme);
        $this->lightModeCss = $this->rootCssGenerator($lightModeTheme);

        return $this;
    }

    /**
     * getDarkModeTheme
     */
    public function getDarkModeTheme(): string
    {
        return $this->darkModeCss ?? $this->defaultTheme(Themes::$DARK);
    }

    /**
     * getLightModeTheme
     */
    public function getLightModeTheme(): string
    {
        return $this->lightModeCss ?? $this->defaultTheme(Themes::$LIGHT);
    }

    /**
     * rootCssGenerator
     *
     * @param  mixed  $variables
     */
    public function rootCssGenerator(array $variables): string
    {
        return json_encode(value: $variables, flags: JSON_PRETTY_PRINT);
    }

    /**
     * spotlight
     *
     * @param  mixed  $condition  default : true
     * @param  mixed  $name  e.g : grid (default) , 'hive'
     * @return void
     */
    public function spotlight(?Spotlight $name = Spotlight::Strock): static
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
     * sidebarItemStyle
     *
     * @param  mixed  $style
     */
    public function sidebarItemStyle(?array $style = SidebarItemsStyles::GHOST): static
    {
        $this->sidebarItemsStyle = $style;

        return $this;
    }

    /**
     * getSidebarItemStyle
     */
    public function getSidebarItemStyle(): array
    {
        return $this->sidebarItemsStyle ?? SidebarItemsStyles::GHOST;
    }

    /**
     * defaultTheme
     *
     * @param  mixed  $variables
     * @return string
     */
    private function defaultTheme(array $variables)
    {
        $default = $this->rootCssGenerator($variables);

        return $default;
    }
}
