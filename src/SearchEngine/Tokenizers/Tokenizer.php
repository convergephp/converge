<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine\Tokenizers;

class Tokenizer
{
    protected string $pattern = '/[^\p{L}\p{N}\p{Pc}\p{Pd}@]+/u';

    public function tokenize($text, $stopwords = []): array
    {
        $text = mb_strtolower($text);
        $split = preg_split($this->pattern, $text, flags: PREG_SPLIT_NO_EMPTY);

        return array_diff($split, $stopwords);
    }
}
