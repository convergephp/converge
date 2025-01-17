<?php

namespace Fluxtor\Converge\Documents;

use Symfony\Component\Yaml\Yaml;

class Parser
{
    public static function make(string $content)
    {
        $content = str_replace(["\r\n", "\r"], "\n", $content);

        if (preg_match('/^\s*---\s*[\n]+(.*?)---\s*[\n]+(.*)$/s', $content, $matches)) {
            $matter = Yaml::parse($matches[1]); 
            $body = $matches[2]; 
        } else {
            $matter = null; 
            $body = $content;
        }

        return new Document($matter, $body);
    }
}
