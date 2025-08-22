<?php

namespace Converge\Routing\Context;

use Converge\Routing\Context\Enums\Contexts;

class VersionContext extends AbstractContext
{
    public function __construct(
        string $id,
        string $route,
        bool $isDefault = false,
        private ?string $semanticVersion = null
    ) {
        parent::__construct(
            $id,
            $route,
            $isDefault,
            middleware: ["UseVersion:{$id}"]
        );
    }

    public function getType(): string | Contexts
    {
        return Contexts::Version;
    }

    public function getSemanticVersion(): ?string
    {
        return $this->semanticVersion;
    }
}
