<?php

namespace Fluxtor\Converge\Enums;

enum Interceptor: string
{
    case AFTER_NAVBAR = 'after_navbar';

    case AFTER_SCRIPTS = 'after_scripts';

    case BEFORE_SIDEBAR_ITEM = 'before_sidebar_item';

    case AFTER_SIDEBAR_ITEM = 'after_sidebar_item';
}
