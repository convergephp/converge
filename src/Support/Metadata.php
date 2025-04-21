<?php

namespace Fluxtor\Converge\Support;

use Illuminate\Support\Arr;
use Illuminate\Support\Benchmark;

class Metadata
{

    protected array $frontMatter = [];

    public function __construct() {}

    // metadata tags
    protected array $rawMetadata = [];
    // open graphs tags
    protected array $rawOgs = [];
    // twitter cards tags
    protected array $rawTwitterCards = [];

    protected array $rawCustomTags = [];

    public function metadata(array $metadata)
    {
        $this->rawMetadata = $metadata;
    }

    public function openGraph(array $ogs)
    {
        $this->rawOgs = $ogs;
    }

    public function addCustom(array $tags)
    {
        $this->rawCustomTags = $tags;
    }

    public function twitterCards(array $cards)
    {
        $this->rawTwitterCards = $cards;
    }


    public function getTwitterCards()
    {
        return collect($this->evaluate($this->rawTwitterCards))
            ->map(fn($v, $k) => ["twitter:$k", $v])
            ->values()
            ->toArray();
    }
    public function getOpenGraphs()
    {

        return collect($this->evaluate($this->rawOgs))
            ->map(fn($v, $k) => ["og:$k", $v])
            ->values()
            ->toArray();
    }

    public function getCustomTags()
    {
        Benchmark::dd([fn() => $this->evaluate($this->rawCustomTags)], 10);

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
                return preg_replace_callback('/\$frontMatter\.([\w\.]+)/', function ($matches) {
                    return Arr::get($this->frontMatter, $matches[1], '');
                }, $value);
            }

            if (is_array($value)) {
                return $this->evaluate($value);
            }

            return $value;
        })->toArray();
    }

    public function frontMatter(array $matter)
    {
        $this->frontMatter = $matter;
    }

    public function getFrontMatter()
    {
        return $this->frontMatter;
    }
}
