<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Illuminate\Support\Collection;
use Fluxtor\Converge\Clusters\Clusters;

trait CanHandleClusters
{
    protected Collection $clusters;

    public function hasClusters(): bool
    {
        return $this->clusters->isEmpty();
    }

    public function defineClusters(Closure $callable): static
    {
        $clusters = new Clusters();
        $callable($clusters);
        dd($clusters);
        return $this;
    }
    // defineClusters(function (Clusters $cluster) {
    //     $cluster->add(
    //         fn(Cluster $cluster) => $cluster
    //             ->label('Documentation')
    //             ->in(base_path('docs/03-fields'))
    //     );
    //     $cluster->add(
    //         fn(Cluster $cluster) => $cluster
    //             ->label('Api Reference')
    //             ->in(base_path('docs/api-refrence'))
    //     );
    //     $cluster->addLink(
    //         fn(ClusterLink $cluster) => $cluster
    //             ->label('Blog ')
    //             ->url(route('blog.index'))
    //     );
    // })
}
