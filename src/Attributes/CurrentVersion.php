<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Attributes;

use Attribute;
use Illuminate\Contracts\Container\Container;
use Illuminate\Contracts\Container\ContextualAttribute;

#[Attribute(Attribute::TARGET_PARAMETER)]
class CurrentVersion implements ContextualAttribute
{
    /**
     * Create a new attribute instance.
     */
    public function __construct(public string $key, public mixed $default = null) {}

    /**
     * Resolve the configuration value.
     *
     * @return mixed
     */
    public static function resolve(self $attribute, Container $container)
    {
        return dd($container->make('converge'));
    }
}
