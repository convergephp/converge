<?php

namespace Fluxtor\Converge\Support;

class Metadata
{
    // metadata tags
    protected array $metadata = [];
    // open graphs tags
    protected array $ogs = [];
    // twitter cards tags
    protected array $twitterCards = [];

    public function metadata(array $metadata)
    {
        $this->metadata = $metadata;
    }
    public function og(array $ogs)
    {
        $openGraphs = [];
        
        foreach ($ogs as $key => $og) {
            $openGraphs[] = ['meta' => "og:{$key}", 'content' => $og];
        }

        $this->ogs = $ogs;
    }
    public function twitterCards(array $cards)
    {
        $this->twitterCards = $cards;
    }
}
