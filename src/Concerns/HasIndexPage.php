<?php

namespace Fluxtor\Converge\Concerns;

use Closure;
use Illuminate\Contracts\View\View;

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
