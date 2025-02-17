<?php

namespace Fluxtor\Converge\Views;

use Closure;
use ReflectionFunction;
use Illuminate\Support\Facades\App;
use Fluxtor\Converge\Enums\Interceptor;
use ReflectionClass;

class ViewInterceptor
{
    protected array $viewPoints = [];

    public function registerViewInterceptor(Interceptor $name, Closure $interceptor): void
    {

        $this->viewPoints[$name->value] = $interceptor;
    }

    public function render($point, mixed $context = null)
    {
        if (!isset($this->viewPoints[$point->value])) return null;

        $view = $this->viewPoints[$point->value];

        $reflector = new ReflectionFunction($view);

        if (is_null($context) || $reflector->getNumberOfParameters() == 0) {
            return value($view);
        }

        if ($context) {

            if (is_object($context)) {
                $className = (new ReflectionClass($context))->getName();
            }

            foreach ($reflector->getParameters() as $param) {
                if ($param->getType()->getName() === $className) {
                    return $view($context);
                }
            }
        }
    }
}
