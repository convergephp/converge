<?php

namespace Fluxtor\Converge\Views;

use Illuminate\View\Component;
use Illuminate\View\View;

class LayoutView extends Component
{
    /**
     * Create the component instance.
     */
    public function __construct(
        public string $layout
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View
    {
        return view('converge::components.layout.'.$this->layout);
    }
}
