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
    protected array $rawMetadata = [];
    // open graphs tags
    protected array $rawOgs = [];
    // twitter cards tags
    protected array $twitterCards = [];

    protected array $customTags = [];

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


    public function getTwitterCards() {}

    public function getOpenGraphs() {}

    public function getCustomTags() {}

    public function evaluate() {}
}
