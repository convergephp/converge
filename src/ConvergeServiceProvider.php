<?php

namespace Fluxtor\Converge;

use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../config/converge.php' => config_path('converge.php'),
        ]);
    }
}
