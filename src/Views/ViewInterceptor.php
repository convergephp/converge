<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Views;

use Closure;
use Fluxtor\Converge\Enums\Interceptor;
use ReflectionClass;
use ReflectionFunction;

use function Fluxtor\Converge\converge;

class ViewInterceptor
{
    // global hooks
    protected array $viewPoints = [];
    
    // scoped to one module hooks 
    protected array $pointsLookup = [];

    protected array $reflectionCache = [];

    public function registerViewInterceptor(Interceptor $name, Closure $interceptor, ?string $addModule = null)
    {

        if (is_null($addModule)) {
            $this->viewPoints[$name->value] = $interceptor;
        } else {
            $this->pointsLookup[$addModule][$name->value] = $interceptor;
        }
        return $this;
    }

    public function render($point, ?callable $context = null)
    {

        $starts = hrtime(true);
        $activeModuleId = converge()->getId();
        $view = $this->pointsLookup[$activeModuleId][$point->value] ?? null;

        if (! $view && isset($this->viewPoints[$point->value])) {
            $view = $this->viewPoints[$point->value];
        }

        if (is_null($view)) return null;


        $key = spl_object_hash($view);

        if (! isset($this->reflectionCache[$key])) {
            $this->reflectionCache[$key] = new ReflectionFunction($view);
        }

        $reflector = $this->reflectionCache[$key];


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
