<?php

namespace Fluxtor\Converge\Commands;

use Illuminate\Console\Command;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Versions\Version;

class SearchIndexerCommand extends Command
{


    protected array $paths = [];
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    protected $signature = 'converge:index-search';



    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'generate search resources for searching converge module\'s docs';

    public function handle()
    {

        $paths = [];
        // for each cluster && version so w can use them into the contexts
        foreach (Converge::getModules() as $module) {
            // for each version let's grab the docs path ?

            if ($module->hasVersions()) {
                foreach ($module->getVersions() as $version) {

                    if (! $version instanceof Version) {
                        continue;
                    }

                    if ($module->getQuietedVersionUrl() === $version->getRoute()) {
                        continue;
                    }

                    $this->pushToPaths(
                        path: $version->getPath(),
                        type: 'version',
                        version: $version->getRoute()
                    );

                    if ($version->hasClusters()) {
                        foreach ($version->getClusters() as $scopedCluster) {

                            if (! $scopedCluster instanceof Cluster) {
                                continue;
                            }

                            if ($scopedCluster->isDefault()) {
                                continue;
                            }

                            $paths[] = [
                                'version' => $version->getRoute(),
                                'type' => 'cluster',
                                'path' => $scopedCluster->getPath()
                            ];
                            $this->pushToPaths(
                                path: $version->getPath(),
                                type: 'cluster',
                                version: $version->getRoute()
                            );
                        }
                    }
                }
            }

            if ($module->hasClusters()) {
                foreach ($module->getClusters() as $cluster) {
                    // it can be a ClusterLink so we need to skip that
                    if (! $cluster instanceof Cluster) {
                        continue;
                    }

                    // if ($cluster->isDefault()) {
                       
                    // }


                    $this->pushToPaths(
                        path: $version->getPath(),
                        type: 'cluster',
                        version: null
                    );
                    // push new paths with queited kind
                }
            }
        }

        dump($this->paths);
    }

    public function pushToPaths(string $path, string $type, ?string $version = null)
    {
        $this->paths[] = [
            'path' => $path,
            'version' => $version,
            'type' => $type,
        ];
    }
}
