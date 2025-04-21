<?php

namespace Fluxtor\Converge\Support;

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

    public function addCustom(array $customMetas)
    {
        $tags = [];

        foreach ($customMetas as $m) {
            $tag = "<meta";
            foreach ($m as $k => $v) {
                $tag .= "$k = \"$v\" ";
            }

            $tag .= "/>";
            $tags[] = $tag;
        }

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

            if (is_array($value)) {
                return $this->evaluate($value);
            }

            if (is_string($value)) {
                return preg_replace_callback('/\$frontMatter\.([\w\.]+)/', function ($matches) {
                    return $this->getFromFrontMatter($matches[1]) ?? '';
                }, $value);
            }
            return $value;
        })->toArray();
    }

    protected function getFromFrontMatter(string $key)
    {
        $segments = explode('.', $key);
        $value = $this->frontMatter;

        foreach ($segments as $segment) {
            if (!is_array($value) || !array_key_exists($segment, $value)) {
                return null;
            }
            $value = $value[$segment];
        }

        return $value;
    }

    public function frontMatter(array $matter)
    {
        $this->frontMatter = $matter;
    }
}
