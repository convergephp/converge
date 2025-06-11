<?php

use Converge\SearchEngine\Tokenizers\Tokenizer;

function tokenize(string $query)
{
    return array_values((new Tokenizer())->tokenize($query, ['and', 'are']));
}


it("split query string into single tokens", function () {
    $query = "module provider clusters";
    expect(tokenize($query))
        ->toBeArray()
        ->toBe(['module', 'provider', 'clusters']);
});


it("ignore stop words if that configured to", function () {
    // config()->set('converge.search_engine.keep_stop_words', true); this is the default
    $query = "modules are amazing";
    expect(tokenize($query))
        ->toBeArray()
        ->toBe(['modules', 'are', 'amazing']);
});

it("keep stop words if that configured to", function () {
    config()->set('converge.search_engine.keep_stop_words', false);
    $query = "modules are simple and amazing";
    // dd(tokenize($query));
    expect(tokenize($query))
        ->toBeArray()
        ->toBe(['modules', 'simple', 'amazing']);
});
