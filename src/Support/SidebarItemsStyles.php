<?php

declare(strict_types=1);

namespace Converge\Support;

class SidebarItemsStyles
{
    /**
     * items like buttons
     */
    public const GHOST = [
        'baseClasses' => 'group/mini-link  group  w-full flex border-transparent  cursor-pointer items-center space-x-3 px-2 py-1  text-base-content  hover:text-primary duration-200',
        'activeClasses' => '!border-l text-primary',
        'nestedClasses' => '!border-primary hover:border-l',
    ];

    public const WHISPER = [
        'baseClasses' => 'group/mini-link  group   w-full mt-1  flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 duration-200',
        'activeClasses' => 'bg-primary/10',
        'nestedClasses' => '',
    ];

    public const ECHO = [
        'baseClasses' => 'group/mini-link !relative group w-full mt-1 flex cursor-pointer items-center space-x-3 py-2 px-2 text-base-content hover:text-primary duration-200',
        'activeClasses' => 'text-primary before:h-1.5',
        'nestedClasses' => 'before:content-[\'\'] before:w-1.5 before:absolute before:-left-[3.4px] before:top-1/2 before:-translate-y-1/2 before:bg-primary before:rotate-45',
    ];

    public const AURA = [
        'baseClasses' => 'group/mini-link  group  w-full mt-1 rounded-field  flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 duration-200',
        'activeClasses' => 'bg-primary/10 text-primary border-l border-transparent',
        'nestedClasses' => '!rounded-l-none !border-l-primary',
    ];
}
