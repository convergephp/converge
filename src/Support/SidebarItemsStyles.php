<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Support;

class SidebarItemsStyles
{
    /**
     * items like buttons
     */
    public const STYLE1 = [
        'baseClasses' => 'group/mini-link  group  ml-1 w-full flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:text-primary duration-200',
        'activeClasses' => 'border-primary text-primary',
        'nestedClasses' => 'border-l border-gray-400/10',
    ];

    public const STYLE2 = [
        'baseClasses' => 'group/mini-link  group  ml-1 w-full  flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 duration-200',
        'activeClasses' => 'bg-primary/10',
        'nestedClasses' => 'border-l border-gray-400/10',
    ];
}
