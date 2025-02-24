<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Views;

use Closure;
use Fluxtor\Converge\Enums\Interceptor;
use ReflectionClass;
use ReflectionFunction;

class ViewInterceptor
{
    protected array $viewPoints = [];

    public function registerViewInterceptor(Interceptor $name, Closure $interceptor): void
    {

        $this->viewPoints[$name->value] = $interceptor;
    }

    public function render($point, ?callable $context = null)
    {
        if (! isset($this->viewPoints[$point->value])) {
            return null;
        }

        $view = $this->viewPoints[$point->value];

        $reflector = new ReflectionFunction($view);

        if (is_null($context) || $reflector->getNumberOfParameters() === 0) {
            return value($view);
        }

        $contextInstance = $context();

        $className = (new ReflectionClass($contextInstance))->getName();

        foreach ($reflector->getParameters() as $param) {
            if ($param->getType()->getName() === $className) {
                return $view($contextInstance);
            }
        }
        return null;
    }
}
