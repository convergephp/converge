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

        foreach ($this->collectPaths() as $id => $modulePaths) {

            $folderName = storage_path('converge') . DIRECTORY_SEPARATOR . $this->id($id);

            // ensure each module exists
            if (!file_exists($folderName)) {
                mkdir($folderName);
            }

            // @todo: delete removed or renamed module's id.

            $versions = collect($modulePaths)->groupBy('version')->toArray();

            foreach ($versions as $id => $versionClusters) {

                $versionFolder = $folderName . DIRECTORY_SEPARATOR . $this->id($id);

                if (!file_exists($versionFolder)) {
                    mkdir($versionFolder);
                }

                foreach ($versionClusters as $cluster) {

                    $clusterFolder = $versionFolder . DIRECTORY_SEPARATOR . $this->id($cluster['cluster']);

                    if (!file_exists($clusterFolder)) {
                        mkdir($clusterFolder);
                    }
                    // now we have the full path where we can put the search resources
                    dump($clusterFolder);
                }
            }
            // $clusters =  
            // dump($modulePaths);
            // 
        }
    }



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
                        version: $version->getRoute(),
                        cluster: 'default'
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

                    // I assigned an explicit quieted version while not always the case to identify 
                    //  the clusters directly assigned to the module
                    $paths[] = $this->pushToPaths(
                        moduleId: $module->getId(),
                        path: $cluster->getPath(),
                        type: PathType::Cluster,
                        cluster: $cluster->getRoute(),
                        version: 'quieted',
                    );
                }
            }
            $paths[] = $this->pushToPaths(
                moduleId: $module->getId(),
                path: $module->getPath(),
                type: PathType::Module,
                version: 'quieted',
                cluster: 'default'
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

    public function id(string $id)
    {
        return base_convert(crc32($id), 10,  36) . '-' . $id;
    }
}
