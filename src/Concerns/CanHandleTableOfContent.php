<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\TableOfContent\TableOfContent;

trait CanHandleTableOfContent
{
    public function tableOfContent(Closure $callable): static
    {
        $toc = new TableOfContent();
        $callable($toc);

        return $this;
    }
}
