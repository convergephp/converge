<?php

namespace Fluxtor\Converge\MenuItems;

use Closure;
use Fluxtor\Converge\Concerns\CanOpenUrlInNewTab;
use Fluxtor\Converge\Concerns\HasIcon;
use Fluxtor\Converge\Concerns\HasUrl;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasStyles;
use Fluxtor\Converge\Concerns\Resolver;

class MenuItem
{
    use HasLabel;
    use HasUrl;
    use HasSort;
    use HasStyles;
    use Resolver;
    use CanOpenUrlInNewTab;
    use HasIcon;

    protected bool | Closure $isVisible = true;

    public function visible(bool|Closure $condition = true)
    {
        if ($condition instanceof Closure) {
            // $reflector = new \ReflectionFunction($condition);
        }

        $this->isVisible = $condition;
    }

    public function hidden(bool|Closure $condition = true)
    {
        $this->visible(!$condition);
        return $this;
    }


    public function isVisible(): bool
    {
        return $this->resolve($this->isVisible);
    }
}
