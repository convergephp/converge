<?php

namespace Fluxtor\Converge\SearchEngine\Tokenizers;

class Tokenizer
{
    protected string  $pattern = '/[^\p{L}\p{N}\p{Pc}\p{Pd}@]+/u';

    public function tokenize($text, $stopwords = []): array
    {
        $text  = mb_strtolower($text);

        $tokens = preg_split($this->pattern, $text, flags: PREG_SPLIT_NO_EMPTY);

        if (config('converge.search_engine.keep_stop_words')) {
            return $tokens;
        }

        return array_diff($tokens, $stopwords);
    }
}
