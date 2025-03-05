<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasIndexPage
{
    protected ?Closure $indexView = null;

    public function indexView(?Closure $view)
    {
        $this->indexView = $view;

        return $this;
    }

    public function getIndexView(): mixed
    {
        return $this->resolve($this->indexView);
    }
}
