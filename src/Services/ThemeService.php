<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Services;

class ThemeService
{
    protected $config;

    public function __construct()
    {
        $this->config = config('converge');
    }

    /**
     * getLayout
     *
     * @return void
     */
    public function getLayout()
    {
        return $this->config['layout'];
    }

    public function layout()
    {
        return $this->config['layout'];
    }

    public function getCssVariables(): string
    {
        return <<<CSS
            :root {
                --converge-primary: {$this->config['theme']['primary']};
                --converge-border-radius: {$this->config['theme']['border-radius']};
            }
CSS;
    }
}
