<?php

use Converge\SearchEngine\Tokenizers\Tokenizer;

function tokenize(string $query, array $stopWords = [])
{
    return array_values((new Tokenizer())->tokenize($query, $stopWords));
}

describe('Tokenizer Basic Functionality', function () {
    it("splits query string into single tokens", function () {
        $query = "module provider clusters";
        expect(tokenize($query))
            ->toBeArray()
            ->toBe(['module', 'provider', 'clusters']);
    });

    it("handles empty strings", function () {
        expect(tokenize(""))->toBe([]);
    });

    it("handles single words", function () {
        expect(tokenize("documentation"))->toBe(['documentation']);
    });
});

describe('Stop Words Handling', function () {
    it("removes configured stop words", function () {
        $query = "modules are simple and amazing";
        $stopWords = ['and', 'are'];
        
        expect(tokenize($query, $stopWords))
            ->toBeArray()
            ->toBe(['modules', 'simple', 'amazing']);
    });

    it("keeps all words when no stop words configured", function () {
        $query = "modules are amazing";
        
        expect(tokenize($query))
            ->toBeArray()
            ->toBe(['modules', 'are', 'amazing']);
    });

    it("handles case insensitive stop words", function () {
        $query = "The Quick Brown Fox";
        $stopWords = ['the', 'and'];
        
        expect(tokenize($query, $stopWords))
            ->toBe(['quick', 'brown', 'fox']);
    });
});

describe('Special Characters and Edge Cases', function () {
    it("handles punctuation correctly", function () {
        $query = "hello, world! how are you?";
        expect(tokenize($query))
            ->toBe(['hello', 'world', 'how', 'are', 'you']);
    });

    it("handles multiple spaces and tabs", function () {
        $query = "word1    word2\t\tword3";
        expect(tokenize($query))
            ->toBe(['word1', 'word2', 'word3']);
    });

    it("handles hyphenated words", function () {
        $query = "full-text search engine";
        expect(tokenize($query))
            ->toBe(['full-text', 'search', 'engine']); // or ['full', 'text', 'search', 'engine'] depending on your preference
    });

    it("handles numbers and alphanumeric", function () {
        $query = "version 1.2.3 and PHP8";
        expect(tokenize($query))
            ->toBe(['version', '1.2.3', 'and', 'php8']);
    });

    it("handles unicode characters", function () {
        $query = "café naïve résumé";
        expect(tokenize($query))
            ->toBe(['café', 'naïve', 'résumé']);
    });
});

describe('Performance Edge Cases', function () {
    it("handles very long strings", function () {
        $longString = str_repeat("word ", 1000) . "end";
        $result = tokenize($longString);
        
        expect($result)
            ->toHaveCount(1001)
            ->and($result[1000])->toBe('end');
    });

    it("handles strings with only stop words", function () {
        $query = "and or but the";
        $stopWords = ['and', 'or', 'but', 'the'];
        
        expect(tokenize($query, $stopWords))->toBe([]);
    });
});

describe('Configuration Integration', function () {
    beforeEach(function () {
        config()->set('converge.search_engine.keep_stop_words', true);
    });

    it("respects global stop words configuration when enabled", function () {
        config()->set('converge.search_engine.keep_stop_words', true);
        config()->set('converge.search_engine.stop_words', ['the', 'and']);
        
        $query = "the quick and dirty solution";
        // Assuming your tokenizer checks config when no stop words passed
        expect(tokenize($query))
            ->toBe(['the', 'quick', 'and', 'dirty', 'solution']);
    });

    it("removes stop words when configuration disabled", function () {
        config()->set('converge.search_engine.keep_stop_words', false);
        config()->set('converge.search_engine.stop_words', ['the', 'and']);
        
        $query = "the quick and dirty solution";
        expect(tokenize($query))
            ->toBe(['quick', 'dirty', 'solution']);
    });
});

// Data provider style tests for comprehensive coverage
describe('Tokenization Patterns', function () {
    it('handles various input patterns', function ($input, $expected) {
        expect(tokenize($input))->toBe($expected);
    })->with([
        ['CamelCaseWord', ['camelcaseword']], // or split on case if that's your logic
        ['snake_case_word', ['snake_case_word']],
        ['UPPERCASE TEXT', ['uppercase', 'text']],
        ['mixed123CASE', ['mixed123case']],
        ['  leading and trailing  ', ['leading', 'and', 'trailing']],
        ['newline\nand\ttab', ['newline', 'and', 'tab']],
    ]);
});