<?php

namespace Converge\Routing\Context;

use Converge\Routing\Context\Enums\Contexts;

class CustomContext extends AbstractContext
{
    public function __construct(
        string $id,
        string $route,
        bool $isDefault = false,
        private string $locale = 'en',
        private string $direction = 'ltr'
    ) {
        parent::__construct(
            $id,
            $route,
            $isDefault,
            middleware: ["UseLanguage:{$id}", "SetLocale:{$locale}"]
        );
    }

    public function getType(): string|Contexts
    {
        return Contexts::Custom;
    }
    
    public function getLocale(): string
    {
        return $this->locale;
    }
    
    public function getDirection(): string
    {
        return $this->direction;
    }
}
