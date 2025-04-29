<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use InvalidArgumentException;

trait HasBrandLogo
{
    use Resolver;

    protected string|HtmlString|Closure|null $brandLogo = null;

    protected string|Closure|null $brandLogoHeight = null;

    protected string|HtmlString|Closure|null $darkModeBrandLogo = null;

    /**
     * brandLogo : set the light  brand logo
     *
     * @param  mixed  $logo
     */
    public function brandLogo(string|Htmlable|Closure|null $logo): static
    {
        if ($logo !== null && ! ($logo instanceof Closure)) {
            $this->validateLogo($logo);
        }

        $this->brandLogo = $logo;

        return $this;
    }

    /**
     * brandLogoHeight : Set the brand logo height
     *
     * @param  mixed  $height
     */
    public function brandLogoHeight(string|Closure|null $height): static
    {
        if ($height !== null && ! ($height instanceof Closure)) {
            $this->validateHeight($height);
        }

        $this->brandLogoHeight = $height;

        return $this;
    }

    /**
     * darkModeBrandLogo : Set the dark mode brand logo
     *
     * @param  mixed  $logo
     */
    public function darkModeBrandLogo(string|Htmlable|Closure|null $logo): static
    {
        if ($logo !== null && ! ($logo instanceof Closure)) {
            $this->validateLogo($logo);
        }

        $this->darkModeBrandLogo = $logo;

        return $this;
    }

    /**
     * getBrandLogo : Get the brand logo
     *
     * @return string
     */
    public function getBrandLogo(): string|Htmlable|null
    {
        return $this->resolve($this->brandLogo) ?? config('app.name');
    }

    /**
     * getBrandLogoHeight : Get the brand logo
     */
    public function getBrandLogoHeight(): string
    {
        return $this->resolve($this->brandLogoHeight) ?? '1.5rem';
    }

    /**
     * getDarkModeBrandLogo : Get the dark mode brand logo
     *
     * @return string
     */
    public function getDarkModeBrandLogo(): string|Htmlable|null
    {
        return $this->resolve($this->darkModeBrandLogo);
    }

    /**
     * hasDarkModeLogo : Check if the dark mode logo is set
     */
    public function hasDarkModeLogo(): bool
    {
        return filled($this->getDarkModeBrandLogo());
    }

    /**
     * getLogoHtml : Get logo HTML
     *
     * @param  mixed  $darkMode
     */
    public function getLogoHtml(bool $darkMode = false): HtmlString
    {
        $logo = $darkMode ? $this->getDarkModeBrandLogo() : $this->getBrandLogo();
        $height = $this->getBrandLogoHeight();

        // Classes de base
        $baseClasses = 'transition-opacity duration-200';

        // Classes selon le mode
        $modeClasses = $this->hasDarkModeLogo()
            ? ($darkMode ? '' : '')
            : 'block';

        $classes = $baseClasses.' '.$modeClasses;

        // case of objet Htmlable
        if ($logo instanceof Htmlable) {
            return new HtmlString($logo->toHtml());
        }

        // cas Url or valide image path
        if ($logo && ($this->isValidUrl($logo) || $this->isValidLocalPath($logo))) {
            return new HtmlString(sprintf(
                '<img src="%s" alt="%s" class="%s" style="height: %s" onerror="this.style.display=\'none\'">',
                $logo,
                htmlspecialchars(config('app.name')),
                $classes,
                $height
            ));
        }

        // Plain Text (app name or brand name string)
        $textContent = $logo ?? config('app.name');
        $textClasses = 'text-xl font-extrabold text-primary pl-1 '.$classes;

        return new HtmlString(sprintf(
            '<span class="%s">%s</span>',
            $textClasses,
            htmlspecialchars($textContent)
        ));
    }

    /**
     * validateLogo : Validate a logo value
     *
     * @param  mixed  $logo
     */
    protected function validateLogo(string|Htmlable $logo): void
    {
        if ($logo instanceof Htmlable) {
            return;
        }

        if ($this->isValidUrl($logo)) {
            return;
        }

        if ($this->isValidLocalPath($logo)) {
            return;
        }

        if ($this->isPlainText($logo)) {
            return;
        }

        throw new InvalidArgumentException('Invalid logo format or file not found.');
    }

    /**
     * validateHeight : Validate the height value
     *
     * @param  mixed  $height
     */
    protected function validateHeight(string $height): void
    {
        if (! preg_match('/^\d*\.?\d+(rem|em|px|pt|%|vh|vw)$/', $height)) {
            throw new InvalidArgumentException('Invalid height format. Must be a valid CSS size unit.');
        }
    }

    /**
     * isValidUrl : Check if the value is a valid URL
     *
     * @param  mixed  $value
     */
    protected function isValidUrl(string $value): bool
    {
        return filter_var($value, FILTER_VALIDATE_URL) !== false;
    }

    /**
     * isValidLocalPath : Check if the value is a valid local path
     *
     * @param  mixed  $path
     */
    protected function isValidLocalPath(string $path): bool
    {
        $path = ltrim($path, '/');

        return File::exists(public_path($path)) || Storage::exists($path);
    }

    /**
     * isPlainText : Check if the value is plain text (for text-based logos)
     *
     * @param  mixed  $value
     */
    protected function isPlainText(string $value): bool
    {
        return ! Str::contains($value, ['/', '\\', '.']) &&
            mb_strlen($value) <= 50 &&
            ! preg_match('/[\x00-\x1F\x7F]/', $value);
    }

    /**
     * getLogoClasses : Get appropriate CSS classes based on mode
     *
     * @param  mixed  $darkMode
     */
    protected function getLogoClasses(bool $darkMode): string
    {
        $classes = ['h-auto transition-opacity duration-200'];

        if ($this->hasDarkModeLogo()) {
            $classes[] = $darkMode ? 'hidden dark:block' : 'dark:hidden';
        }

        return implode(' ', $classes);
    }
}
