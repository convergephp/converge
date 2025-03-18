<?php

namespace Fluxtor\Converge\Commands;

use Illuminate\Console\Command;
use Fluxtor\Converge\Enums\PathType;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\SearchEngine\SearchManager;

use function Laravel\Prompts\progress;

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
        $start = microtime(true);

        $paths = $this->collectPaths();

        $totalSteps = collect($paths)->flatten(1)->count();

        $progress = progress(label: 'Indexing Search Resources', steps: $totalSteps);

        $progress->start();


        foreach ($paths as $id => $modulePaths) {
            $folderName = storage_path('converge') . DIRECTORY_SEPARATOR . $this->id($id);

            if (!file_exists($folderName)) {
                mkdir($folderName, recursive: true);
            }

            // @todo: delete removed or renamed module's id.

            $versions = collect($modulePaths)->groupBy('version')->toArray();

            foreach ($versions as $id => $versionClusters) {

                $versionFolder = $folderName . DIRECTORY_SEPARATOR . $this->id($id);

                if (!file_exists($versionFolder)) {
                    mkdir($versionFolder);
                }

                foreach ($versionClusters as $cluster) {

                    $distination = $clusterFolder = $versionFolder . DIRECTORY_SEPARATOR . $this->id($cluster['cluster']);

                    if (!file_exists($clusterFolder)) {
                        mkdir($clusterFolder);
                    }

                    $source = $cluster['path'];

                    $searchManager = new SearchManager();

                    $progress->label("Indexing module: {$cluster['module']}");

                    $progress->hint("version: {$cluster['version']} cluster: {$cluster['cluster']}");

                    $searchManager->index($source, $distination);

                    $progress->advance();
                }
            }
        }

        $time = (microtime(true) - $start) * 1000;

        $progress->label("all modules resources indexed successfully in: {$this->displayElapsedTime($time)}");

        $progress->finish();
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

                    $this->pushToPaths(
                        paths: $paths,
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

                            $this->pushToPaths(
                                paths: $paths,
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
                    $this->pushToPaths(
                        paths: $paths,
                        moduleId: $module->getId(),
                        path: $cluster->getPath(),
                        type: PathType::Cluster,
                        cluster: $cluster->getRoute(),
                        version: 'quieted',
                    );
                }
            }
            $this->pushToPaths(
                paths: $paths,
                moduleId: $module->getId(),
                path: $module->getPath(),
                type: PathType::Module,
                version: 'quieted',
                cluster: 'default'
            );
        }

        return collect($paths)->groupBy('module')->toArray();
    }

    public function pushToPaths(array &$paths, string $moduleId, string $path, PathType $type, ?string $version = null, ?string $cluster = null)
    {
        $paths[] = [
            'module'  => $moduleId,
            'path'    => $path,
            'type'    => $type,
            'version' => $version,
            'cluster' => $cluster,
        ];
    }

    public function id(string $id)
    {
        return base_convert(crc32($id), 10,  36) . '-' . $id;
    }

    public function displayElapsedTime(float $milliseconds)
    {
        if ($milliseconds < 1000) {
            return number_format($milliseconds, 2) . ' ms';
        }

        $seconds = $milliseconds / 1000;

        if ($seconds < 60) {
            return number_format($seconds, 2) . ' seconds';
        }

        $minutes = floor($seconds / 60);
        $remainingSeconds = $seconds % 60;

        return "{$minutes} minute(s), " . number_format($remainingSeconds, 2) . " seconds";
    }
}
