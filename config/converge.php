<?php

declare(strict_types=1);

/**
 * Search Engine Configuration
 *
 * This file contains configuration options for the Fluxtor Converge Search Engine.
 * You can control stop word behavior, fuzzy search options, and result limits.
 */

return [
    'search_engine' => [

        /**
         * keep_stop_words (bool)
         *
         * Whether to include common "stop words" (e.g., "the", "and", "is") in the index and search results.
         *
         * - true: Keep stop words, allowing them to be indexed and searchable.
         * - false: Ignore stop words during tokenization, reducing index size and improving search relevance.
         */
        'keep_stop_words' => true,

        /**
         * fuzzy_search (bool)
         *
         * Enable or disable fuzzy search capabilities.
         *
         * - true: Allow approximate matching of search terms (helpful for handling typos or misspellings).
         * - false: Only exact term matches will be considered.
         */
        'fuzzy_search' => true,

        /**
         * fuzzy_search_using (string)
         *
         * Define the fuzzy search algorithm to be used.
         *
         * Supported options:
         * - 'jaro_winkler': Good for short strings and typographical errors (recommended for names, titles).
         * - 'levenshtein': Measures edit distance (inserts, deletes, substitutes) between terms, useful for more general cases.
         */
        'fuzzy_search_using' => 'jaro_winkler',

        /**
         * results_max_count (int)
         *
         * Set the maximum number of search results to return for any query.
         *
         * This helps to limit memory usage and keeps result sets manageable.
         */
        'results_max_count' => 50,
    ],
];
