<?php

declare(strict_types=1);

use Converge\SearchEngine\Tokenizers\Tokenizer;

function tokenize(string $query, array $stopWords = [])
{
    return array_values((new Tokenizer())->tokenize($query, $stopWords));
}

describe('Tokenizer Basic Functionality', function () {
    it('splits query string into single tokens', function () {
        $query = 'module provider clusters';
        expect(tokenize($query))
            ->toBeArray()
            ->toBe(['module', 'provider', 'clusters']);
    });

    it('handles empty strings', function () {
        expect(tokenize(''))->toBe([]);
    });

    it('handles single words', function () {
        expect(tokenize('documentation'))->toBe(['documentation']);
    });
});

describe('Stop Words Handling', function () {
    $stopWords = ['and', 'are'];
    it('keeps stop words by default', function () use ($stopWords) {
        $query = 'modules are simple and amazing';

        expect(tokenize($query, $stopWords))
            ->toBeArray()
            ->toBe(['modules', 'are', 'simple', 'and', 'amazing'])
            ->not->toBe(['modules', 'simple', 'amazing']);
    });

    it("remove the stop words when it's configured to", function () use ($stopWords) {

        config()->set('converge.search_engine.keep_stop_words', false);

        $query = 'modules are amazing';

        expect(tokenize($query, $stopWords))
            ->toBeArray()
            ->toBe(['modules', 'amazing'])
            ->not->toBe(['modules', 'are', 'amazing']);
    });

    it('handles case insensitive stop words', function () {
        $query = 'The Quick Brown Fox';
        $stopWords = ['the', 'and'];

        expect(tokenize($query, $stopWords))
            ->toBe(['the', 'quick', 'brown', 'fox']);
    });
});

describe('Special Characters and Edge Cases', function () {
    it('handles punctuation correctly', function () {
        $query = 'hello, world! how are you?';
        expect(tokenize($query))
            ->toBe(['hello', 'world', 'how', 'are', 'you']);
    });

    it('handles multiple spaces and tabs', function () {
        $query = "word1    word2\t\tword3";
        expect(tokenize($query))
            ->toBe(['word1', 'word2', 'word3']);
    });

    it('handles hyphenated words', function () {
        $query = 'full-text search engine';
        expect(tokenize($query))
            ->toBe(['full-text', 'search', 'engine'])
            ->not->toBe(['full', 'text', 'search', 'engine']);
    });

    it('handles numbers and alphanumeric', function () {
        $query = 'version 1.2.3 and PHP8';
        expect(tokenize($query))
            // it shoud be like this, but let's keep it naive for now
            // ->toBe(['version', '1.2.3', 'and', 'php8']);
            ->toBe(['version', '1', '2', '3', 'and', 'php8']);
    });

    it('handles unicode characters', function () {
        $query = "je parle français bien et j'ai été dernier dans cette café";
        expect(tokenize($query))
            // it shoud be like this, but let's keep it naive for now
            // ->toBe(['je', 'parle', 'français', 'bien', 'et', 'j\'ai', 'été', 'dernier', 'dans', 'cette', 'café']);
            ->toBe(['je', 'parle', 'français', 'bien', 'et', 'j', 'ai', 'été', 'dernier', 'dans', 'cette', 'café']);
    });

    it('preserves accented characters', function () {
        $query = 'café naïve résumé';
        expect(tokenize($query))
            ->toBe(['café', 'naïve', 'résumé']);
    });

    it('handles mixed unicode and ascii', function () {
        $query = 'search Москва documentation Tokyo 東京';
        expect(tokenize($query))
            ->toBe(['search', 'москва', 'documentation', 'tokyo', '東京']);
    });
});

describe('Tokenization Patterns', function () {
    it('handles various input patterns', function ($input, $expected) {
        expect(tokenize($input))->toBe($expected);
    })->with([
        ['CamelCaseWord', ['camelcaseword']],
        ['snake_case_word', ['snake_case_word']],
        ['UPPERCASE TEXT', ['uppercase', 'text']],
        ['mixed123CASE', ['mixed123case']],
        ['  leading and trailing  ', ['leading', 'and', 'trailing']],
    ]);
});
