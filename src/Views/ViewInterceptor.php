<?php

namespace Fluxtor\Converge\Views;

use Closure;
use Illuminate\Support\Arr;

class ViewInterceptor
{
    protected array $viewPoints = [];
    public function registerViewInterceptor(string $name, Closure $interceptor, string | array | null $scopes = null): void
    {
        $scopes = Arr::wrap($scopes);
        foreach($scopes as $scope){

        }
    }

    public function render($point){
        dd($point);
    }
}
