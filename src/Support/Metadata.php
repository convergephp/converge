<?php

namespace Fluxtor\Converge\Support;

class Metadata
{

    protected array $frontMatter = [];

    public function __construct(array $frontMatter = [])
    {
        $this->frontMatter = $frontMatter;
    }

    // metadata tags
    protected array $metadata = [];
    // open graphs tags
    protected array $ogs = [];
    // twitter cards tags
    protected array $twitterCards = [];

    protected array $customTags = [];

    public function metadata(array $metadata)
    {
        $metaData = [];
        foreach ($metadata as $key => $meta) {
            $metaData[] = [$key, $meta];
        }

        $this->metadata = $metadata;
    }

    public function openGraph(array $ogs)
    {
        $openGraphs = [];

        foreach ($ogs as $key => $og) {
            $openGraphs[] = ["og:{$key}", $og];
        }

        $this->ogs = $openGraphs;
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

        $this->customTags = $tags;
    }

    public function twitterCards(array $tCards)
    {
        $cards = [];

        foreach ($tCards as $key => $og) {
            $cards[] = ["twitter:{$key}", $og];
        }

        $this->twitterCards = $cards;
    }
}
