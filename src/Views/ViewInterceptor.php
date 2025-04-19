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
    // act as global hooks
    protected array $viewPoints = [];

    // module scoped hooks

    protected array $contextualPoints = [];

    protected array $withinModules = [];

    public function registerViewInterceptor(Interceptor $name, Closure $interceptor, ?string $addModule = null): void
    {

        // is likely getting registred from the sevice provider and we need to make globally
        if (is_null($addModule)) {
            $this->viewPoints[$name->value] = $interceptor;
        } else {
            $this->contextualPoints[] = [
                'name' => $name->value,
                'id' => $addModule
            ];
        }


        // if the add module is set so we need a way to mark that is belong to this module
        // grab the module 

        // $this->withinModules = array_unique([...$this->withinModules, $addModule]);
    }

    public function render($point, ?callable $context = null)
    {

        $activeModuleId = converge()->getId();

        foreach ($this->contextualPoints as $contextualPoint) {
            if ($contextualPoint['id'] === $activeModuleId) {
                
            }
        }

        // there is no global points 
        if (! isset($this->viewPoints[$point->value])) {
            return null;
        }

        // there is contextual points
        

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
