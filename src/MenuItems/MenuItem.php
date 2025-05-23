<?php

declare(strict_types=1);

namespace Converge\MenuItems;

use Closure;
use Converge\Concerns\CanOpenUrlInNewTab;
use Converge\Concerns\HasIcon;
use Converge\Concerns\HasLabel;
use Converge\Concerns\HasSort;
use Converge\Concerns\HasStyles;
use Converge\Concerns\HasUrl;
use Converge\Concerns\Resolver;

class MenuItem
{
    use CanOpenUrlInNewTab;
    use HasIcon;
    use HasLabel;
    use HasSort;
    use HasStyles;
    use HasUrl;
    use Resolver;

    protected bool|Closure $isVisible = true;

    public function visible(bool|Closure $condition = true)
    {
        if ($condition instanceof Closure) {
            // @todo: handle resolvation using attributes
        }

        $this->isVisible = $condition;
    }

    public function hidden(bool|Closure $condition = true)
    {
        $this->visible(! $condition);

        return $this;
    }

    public function isVisible(): bool
    {
        return $this->resolve($this->isVisible);
    }
}
