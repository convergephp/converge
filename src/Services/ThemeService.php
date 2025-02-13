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

    public function getCssVariables()
    {
//         if (filled($this->config['preset'])) {
//             // dd($this->config['preset']);
//             // charge "---" preset
//         } else {
//             return <<<CSS
//             :root {
//                 --converge-primary: {$this->config['theme']['primary']};
//                 --converge-border-radius: {$this->config['theme']['border-radius']};
//             }
// CSS;
//         }
//     }
}

    /**
     * {
     * --converge-primary-100 :  ;
     * --converge-primary-200 :  ;
     * --converge-primary-300 :  ;
     * --converge-primary-400 :  ;
     * preset { prese, =}
     * }
     */
}
