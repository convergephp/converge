<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Enums;

enum PathType: string
{
    case Cluster = 'module-cluster'; // module level clusters 
 
    case Module = 'module'; // module level clusters 

    case Version = 'version'; // module version 

    case ScopedCluster = 'scoped-cluster'; // version cluster
    
}
