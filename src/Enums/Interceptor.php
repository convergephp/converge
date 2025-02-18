<?php

namespace Fluxtor\Converge\Enums;

enum Interceptor: string
{
    case AFTER_NAVBAR = 'after_navbar';

    case AFTER_SCRIPTS = 'after_scripts';

    case BEFORE_SIDEBAR_LINK = 'before_sidebar_link';

    case AFTER_SIDEBAR_LINK = 'after_sidebar_link';
    
    case BEFORE_SIDEBAR_LABEL = 'before_sidebar_label';

    case AFTER_SIDEBAR_LABEL = 'after_sidebar_label';
}
