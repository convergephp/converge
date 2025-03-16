<?php

namespace Fluxtor\Converge\Commands;

use Illuminate\Console\Command;
use Fluxtor\Converge\Enums\PathType;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Versions\Version;
use function Laravel\Prompts\progress;
use Symfony\Component\Console\Helper\ProgressBar;

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
        sleep(1);
        foreach ($this->collectPaths() as $id => $modulePaths) {
            // create hashed folder 
            $folderName = md5($id);

            dump($folderName);
            //  foreach module we need to create it's resource on it's own folder using hash
            // hash default key word an using it for top level path
            // 
        }
    }

    public function index() {}

    public function collectPaths()
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

                    $paths[] = $this->pushToPaths(
                        moduleId: $module->getId(),
                        path: $version->getPath(),
                        type: PathType::Version,
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

                            $paths[] = $this->pushToPaths(
                                moduleId: $module->getId(),
                                path: $scopedCluster->getPath(),
                                type: PathType::ScopedCluster,
                                version: $version->getRoute(),
                                cluster: $scopedCluster->getRoute()
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

                    if ($cluster->isDefault()) {
                        continue;
                    }


                    $paths[] = $this->pushToPaths(
                        moduleId: $module->getId(),
                        path: $cluster->getPath(),
                        type: PathType::Cluster,
                        version: null,
                        cluster: $cluster->getRoute()
                    );
                }
            }
            $paths[] = $this->pushToPaths(
                moduleId: $module->getId(),
                path: $module->getPath(),
                type: PathType::Module,
            );
        }

        return collect($paths)->groupBy('module')->toArray();
    }

    public function pushToPaths(string $moduleId, string $path, PathType $type, ?string $version = null, ?string $cluster = null)
    {
        return  [
            'module' => $moduleId,
            'path' => $path,
            'type' => $type,
            'version' => $version,
            'cluster' => $cluster,
        ];
    }
}
