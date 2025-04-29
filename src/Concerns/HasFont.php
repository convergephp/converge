<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Converge\FontProviders\BunnyFontProvider;
use Converge\FontProviders\GoogleFontProvider;
use Illuminate\Contracts\Support\Htmlable;

trait HasFont
{
    protected ?string $fontFamily = null;

    protected string $fontProvider = GoogleFontProvider::class;

    protected ?string $fontUrl = null;

    /**
     * font
     *
     * @param  mixed  $family
     * @param  mixed  $url
     * @param  mixed  $provider
     */
    public function font(string $family, ?string $url = null, ?string $provider = null): static
    {
        $this->fontProvider = GoogleFontProvider::class;

        $this->fontFamily = $family;
        $this->fontUrl = $url;

        if (filled($provider)) {
            $this->fontProvider = $provider;
        } else {
            $this->fontProvider = BunnyFontProvider::class;
        }

        return $this;
    }

    public function getFontFamily(): string
    {
        return $this->fontFamily ?? 'Inter';
    }

    public function getFontHtml(): Htmlable
    {
        return app($this->getFontProvider())->getHtml(
            $this->getFontFamily(),
            $this->getFontUrl(),
        );
    }

    public function getFontProvider(): string
    {
        return $this->fontProvider;
    }

    public function getFontUrl(): ?string
    {
        return $this->fontUrl;
    }
}
