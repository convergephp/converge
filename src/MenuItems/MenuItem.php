<?php

namespace Fluxtor\Converge\MenuItems;

use Closure;
use Fluxtor\Converge\Concerns\CanOpenUrlInNewTab;
use Fluxtor\Converge\Concerns\HasUrl;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\Resolver;

class MenuItem
{
    use HasLabel;
    use HasUrl;
    use HasSort;
    use Resolver;
    use CanOpenUrlInNewTab;

    protected bool|Closure $isVisible = true;

    public function visible(bool|Closure $condition = true)
    {
        $reflector = new \ReflectionFunction($condition);
        
        //  dd($reflector); 

        $this->isVisible = $condition;
    }

    public function isVisible(): bool
    {
        return $this->isVisible;
    }
}
