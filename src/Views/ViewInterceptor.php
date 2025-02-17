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

        $this->viewPoints[$name->value] = $interceptor;
    }

    public function render($point, mixed $context = null)
    {
        if (empty($this->viewPoints)) return;


        foreach ($this->viewPoints as $pointName => $view) {
            $reflector = new ReflectionFunction($view);

            if (is_null($context) || $reflector->getNumberOfParameters() == 0) {
                if ($point->value === $pointName) {
                    return value($view);
                }
            }

            foreach ($reflector->getParameters() as $param) {



                dd(
                    $param->getType(),
                    $param->getName()
                );
            }
        }
    }
}
