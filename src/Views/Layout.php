<?php

declare(strict_types=1);

namespace Converge\Views;

use Illuminate\View\Component;
use Illuminate\View\View;

class Layout extends Component
{
    /**
     * Create the component instance.
     */
    public function __construct(
        public string $name,
        public array $metadata,
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View
    {
        return view('converge::components.layout.'.$this->name);
    }
}
