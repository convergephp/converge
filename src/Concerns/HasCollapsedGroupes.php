<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

trait HasCollapsedGroupes
{
    protected bool $isCollapsedGroupes = false;

    /**
     * collapsedGroupes
     *
     * @param  mixed  $condition
     */
    public function collapsedGroupes(?bool $condition = true): static
    {
        $this->isCollapsedGroupes = $condition;

        return $this;
    }

    /**
     * isCollapsedGroupes
     */
    public function isCollapsedGroupes(): bool
    {
        return $this->isCollapsedGroupes;
    }
}
