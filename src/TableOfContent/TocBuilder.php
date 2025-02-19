<?php

namespace Fluxtor\Converge\TableOfContent;

class TocBuilder
{
    protected string $content;
    protected array $level = [];
    protected array $text = [];
    protected string $place;
    protected string $shortcode;

    public function __construct(string $content, string $place = 'top', string $shortcode = '/\[toc\]/i')
    {
        $this->content = $content;
        $this->place = $place;
        $this->shortcode = $shortcode;
        $this->extractHeadings();
    }

    /**
     * Extracts headings from the content.
     */
    private function extractHeadings(): void
    {
        preg_match_all('/<h([1-6])[^>]*>(.*?)<\/h\1>/is', $this->content, $matches);
       
        $this->level = $matches[1] ?? [];
        $this->text = $matches[2] ?? [];
    }

    /**
     * Generates a slug for a heading.
     */
    private function getHref(string $text): string
    {
        return strtolower(trim(preg_replace('/[^a-z0-9]+/i', '-', strip_tags($text)), '-'));
    }

    /**
     * Returns modified content with `id` attributes in headings.
     */
    public function getPost(): string
    {
        return preg_replace_callback(
            '/<h([1-6])[^>]*>(.*?)<\/h\1>/is',
            function ($matches) {
                $id = $this->getHref($matches[2]);
                return "<h{$matches[1]} id=\"$id\">{$matches[2]}</h{$matches[1]}>";
            },
            $this->content
        );
    }

    /**
     * Builds the table of contents data.
     */
    public function getDataToc(): array
    {
        $toc = [];
        foreach ($this->level as $i => $level) {
            $toc[] = [
                'level' => (int)$level,
                'text'  => $this->text[$i],
                'href'  => '#' . $this->getHref($this->text[$i])
            ];
        }
        return $toc;
    }

    /**
     * Generates the HTML for the table of contents.
     */
    public function getToc(): string
    {
        $tocData = $this->getDataToc();
        if (empty($tocData)) {
            return '';
        }

        $toc = '<ul>';
        foreach ($tocData as $item) {
            $toc .= "<li><a href=\"{$item['href']}\">{$item['text']}</a></li>";
        }
        $toc .= '</ul>';

        return $toc;
    }

    /**
     * Returns the content with the table of contents placed appropriately.
     */
    public function getPostWithToc(): string
    {
        $toc = $this->getToc();
        $content = $this->getPost();

        return match ($this->place) {
            'top' => $toc . $content,
            'title' => preg_replace('/<h[1-6][^>]*>/i', $toc . '$0', $content, 1),
            'shortcode' => preg_replace($this->shortcode, $toc, $content, 1),
            default => $content
        };
    }
}
