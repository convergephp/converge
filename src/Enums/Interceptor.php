<?php

namespace Fluxtor\Converge\Enums;

enum Interceptor: string
{
    case AFTER_NAVBAR = 'after_navbar';

    case AFTER_SCRIPTS = 'after_scripts';

    // sidebar item points
    case BEFORE_SIDEBAR_LINK = 'before_sidebar_link';

    case AFTER_SIDEBAR_LINK = 'after_sidebar_link';

    case BEFORE_SIDEBAR_LABEL = 'before_sidebar_label';

    case AFTER_SIDEBAR_LABEL = 'after_sidebar_label';

    // sidebar group points 
    case BEFORE_SIDEBAR_GROUP_LABEL = 'before_sidebar_group_label';

    case AFTER_SIDEBAR_GROUP_LABEL = 'after_sidebar_group_label';

    case BEFORE_SIDEBAR_GROUP_ITEMS = 'before_sidebar_group_items';

    case AFTER_SIDEBAR_GROUP_ITEMS = 'after_sidebar_group_items';
}
