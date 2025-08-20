<?php

declare(strict_types=1);

namespace Converge\SearchEngine\Tokenizers;

class Tokenizer
{
    // this tokenizer still naive and we're going to make robust step by step, stay tuned.
    protected string $pattern = '/[^\p{L}\p{N}\p{Pc}\p{Pd}@]+/u';

    public function tokenize($text, $stopwords = []): array
    {
        $text = mb_strtolower($text);

        $tokens = preg_split($this->pattern, $text, flags: PREG_SPLIT_NO_EMPTY);

        if (config('converge.search_engine.keep_stop_words')) {
            return $tokens;
        }

        return array_diff($tokens, $stopwords);
    }
}
