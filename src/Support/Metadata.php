<?php

namespace Fluxtor\Converge\Support;

use Illuminate\Support\Arr;
use Illuminate\Support\Benchmark;

class Metadata
{

    protected array $frontMatter = [];
    protected ?string $title = null;
    protected array $rawMetadata = [];
    protected array $rawOgs = [];
    protected array $rawTwitterCards = [];
    protected array $rawCustomTags = [];

    public function metadata(array $metadata): void
    {
        $this->rawMetadata = $metadata;
    }

    public function openGraph(array $ogs): void
    {
        $this->rawOgs = $ogs;
    }

    public function addCustom(array $tags): void
    {
        $this->rawCustomTags = $tags;
    }

    public function twitterCards(array $cards): void
    {
        $this->rawTwitterCards = $cards;
    }

    public function title(string $title)
    {
        $this->title = $title;
    }


    public function getMetadata()
    {
        return $this->evaluate($this->rawMetadata);
    }

    public function getTwitterCards(): array
    {
        return collect($this->evaluate($this->rawTwitterCards))
            ->map(fn($v, $k) => ["twitter:$k", $v])
            ->values()
            ->toArray();
    }
    public function getOpenGraphs(): array
    {

        return collect($this->evaluate($this->rawOgs))
            ->map(fn($v, $k) => ["og:$k", $v])
            ->values()
            ->toArray();
    }

    public function getCustomTags(): array
    {
        $evaluated = $this->evaluate($this->rawCustomTags);

        return collect($evaluated)->map(function ($m) {
            $tag = "<meta";
            foreach ($m as $k => $v) {
                $tag .= " $k=\"$v\"";
            }
            return $tag . " />";
        })->toArray();
    }

    protected function evaluate(array $data): array
    {
        return collect($data)->map(function ($value) {
            if (is_string($value)) {
                return $this->evaluateString($value);
            }

            if (is_array($value)) {
                return $this->evaluate($value);
            }

            return $value;
        })->toArray();
    }

    public function evaluateString(?string $value): ?string
    {
        if (is_null($value)) return null;

        return preg_replace_callback('/\$frontMatter\.([\w\.]+)/', function ($matches) {
            return Arr::get($this->frontMatter, $matches[1], '');
        }, $value);
    }
    public function frontMatter(array $matter): void
    {
        $this->frontMatter = $matter;
    }

    public function getTitle(): string
    {
        return $this->evaluateString($this->title)
            ?? $this->frontMatter['title'];
    }

    public function getFrontMatter()
    {
        return $this->frontMatter;
    }
}
