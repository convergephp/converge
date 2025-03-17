<?php

declare(strict_types=1);

return [
    'search_engine' => [
        'keep_stop_words' => true,  
        'fuzzy_search' => true,
        'fuzzy_search_using' => 'jaro_winkler' // there is also levenshtien
    ]
];
