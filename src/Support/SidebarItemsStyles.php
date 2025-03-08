<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Support;

class SidebarItemsStyles
{
    /**
     * items like buttons
     */
    public const STYLE1 = [
        'baseClasses' => 'group/mini-link  group  w-full flex border-transparent  cursor-pointer items-center  space-x-3 p-2  text-base-content  hover:text-primary duration-200',
        'activeClasses' => '!border-l text-primary',
        'nestedClasses' => '!border-primary ',
    ];

    public const STYLE2 = [
        'baseClasses' => 'group/mini-link  group   w-full mt-1  flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 duration-200',
        'activeClasses' => 'bg-primary/10',
        'nestedClasses' => '',
    ];

    public const STYLE3 = [
        'baseClasses' => 'group/mini-link  group  w-full mt-1  flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:text-primary duration-200',
        'activeClasses' => 'text-primary pl-5 transition-all duration-500',
        'nestedClasses' => '',
    ];

    public const STYLE4 = [
        'baseClasses' => 'group/mini-link  group  w-full mt-1 rounded-field  flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 duration-200',
        'activeClasses' => 'bg-primary/10 text-primary border-l border-transparent',
        'nestedClasses' => '!rounded-l-none !border-l-primary',
    ];
}
