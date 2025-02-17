<?php

namespace Fluxtor\Converge\Views;

use Closure;
use ReflectionFunction;
use Illuminate\Support\Facades\App;
use Fluxtor\Converge\Enums\Interceptor;

class ViewInterceptor
{
    protected array $viewPoints = [];

    public function registerViewInterceptor(Interceptor $name, Closure $interceptor): void
    {

        $this->viewPoints[$name->value][] = $interceptor;
    }

    public function render($point, mixed $context = null)
    {
        if (empty($this->viewPoints)) return;


        foreach ($this->viewPoints as $singlePointViews) {

            foreach ($singlePointViews as $view) {

                if (is_null($context) || (new ReflectionFunction($view))->getNumberOfParameters() == 0) {
                    return App::call($view);
                }

                // dump($reflector);
                // if ($reflector->getNumberOfParameters() >= 1) {

                //     foreach ($reflector->getParameters() as $param) {

                //         dump($param->getType()->getName());
                //     }

                //     // dd($reflector->getParameters()[0]->getType()->getName());
                // }
                // dump(Closure::fromCallable($point)->call($this));
            }
        }
        dd();
    }
}
