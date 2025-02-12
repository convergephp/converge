<?php

namespace Fluxtor\Converge\Theme;

use Fluxtor\Converge\Enums\Layout;
use Fluxtor\Converge\Enums\MaxWidth;

class Theme
{
    protected ?Layout $layout = null;

    protected ?MaxWidth $maxWith = null;

    /**
     * layout
     *
     * @param  mixed  $name
     */
    public function layout(Layout $name): static
    {
        $this->layout = $name;

        return $this;
    }

    /**
     * getLayout
     */
    public function getLayout(): Layout
    {
        return $this->layout;
    }
}
