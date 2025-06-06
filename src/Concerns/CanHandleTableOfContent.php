<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Converge\TableOfContent\TableOfContent;

trait CanHandleTableOfContent
{
    protected ?TableOfContent $tableOfContent = null;

    public function tableOfContent(Closure $callable): static
    {
        $toc = new TableOfContent;

        $this->tableOfContent = $callable($toc);

        return $this;
    }

    public function getTableOfContent()
    {
        return $this->tableOfContent ?? new TableOfContent;
    }
}
