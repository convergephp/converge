<?php

declare(strict_types=1);

namespace Converge\Routing\Context\Enums;

enum Contexts: string
{
    case Version = 'version';

    case Cluster = 'cluster';

    case Lang = 'lang';

    case Custom = 'custom';
}
