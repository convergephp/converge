<?php

namespace Fluxtor\Converge\Documents;

class Document
{

    public function __construct(
        protected ?array $matter,
        protected string $body
    ) {}
    public function matter()
    {
        return $this->matter;
    }
    public function body()
    {
        return $this->body;
    }
}
