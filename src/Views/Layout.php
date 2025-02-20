<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Views;

use Illuminate\Support\Collection;
use Illuminate\View\Component;
use Illuminate\View\View;

class Layout extends Component
{
    /**
     * Create the component instance.
     */
    public function __construct(
        public string $name,
        private Collection $headings
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View
    {
        return view('converge::components.layout.' . $this->name)->with(['headings' => $this->headings]);
    }
}
