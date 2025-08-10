<?php

declare(strict_types=1);

namespace Converge\Tests;


use Pest\Arch\Concerns\Architectable;

class TestCase extends \Orchestra\Testbench\TestCase
{

    use Architectable;
    /**
     * Get package providers.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return array<int, class-string<\Illuminate\Support\ServiceProvider>>
     */
    protected function getPackageProviders($app)
    {
        return [
            \Converge\Providers\ConvergeServiceProvider::class,
        ];
    }

}

