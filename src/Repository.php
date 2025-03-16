<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Versions\Version;

class Repository
/**hold active contexts for the evaluated request*/
{
    protected ?Version $activeVersion = null;

    protected ?Cluster $activeCluster = null;

    protected ?Module $activeModule = null;

    protected ?string $activePath = null;

    protected ?string $activeRoute = null;

    public function setActiveVersion(Version $version)
    {
        $this->activeVersion = $version;

        $this->setActivePath($version->getPath());
    }

    public function setActiveCluster(Cluster $cluster)
    {
        $this->activeCluster = $cluster;
    }

    public function setActiveModule(Module $module)
    {
        $this->activeModule = $module;
    }

    public function setActivePath(string $path)
    {
        $this->activePath = $path;
    }

    public function setActiveRoute(string $url)
    {
        $this->activeRoute = $url;
    }

    public function getActiveVersion()
    {
        return $this->activeVersion;
    }

    public function getActiveCluster()
    {
        return $this->activeCluster;
    }

    public function getModule()
    {
        return $this->activeModule;
    }

    public function getModuleId()
    {
        return $this->activeModule->getId();
    }

    public function getActivePath()
    {
        if ($this->activeVersion) {
            if (blank($this->activeCluster)) {
                return $this->activeVersion->getPath();
            }
        }

        if ($this->activeCluster) {
            return $this->activeCluster->getPath();
        }

        return $this->activeModule->getRawPath();
    }

    public function getActiveRoute()
    {
        return $this->activeVersion;
    }

    public function getActiveRouteName()
    {
        $id = $this->activeModule->getId();
        if ($this->activeVersion) {
            $vRoute = $this->activeVersion->getRoute();
            if (blank($this->activeCluster)) {
                return $id . '.' . $vRoute;
            }

            return $id . '.' . $vRoute . '.' . $this->activeCluster->getRoute();
        }

        if ($this->activeCluster) {
            return $id . '.' . $this->activeCluster->getRoute();
        }

        return $id;
    }

    /**
     * used in search engine, theoriquelly there is always a cluster and actve version
     * for the modules does not have a version actually it has at least one version
     * wich's is the used one in the top module even the cluster
     *  is always a one at least the default one  
     *
     * @return string 
     */
    public function getUsedPath()
    {
        $path = '';

        if ($module = $this->getModule()) {
            $path .= file_name_id($module->getId());
        }

        if ($version = $this->getActiveVersion()) {
            $path .= DIRECTORY_SEPARATOR . file_name_id($version->getRoute());
        } else {
            $path .= DIRECTORY_SEPARATOR . file_name_id('quieted');
        }

        if ($cluster = $this->getActiveCluster()) {
            $path .= DIRECTORY_SEPARATOR . file_name_id($cluster->getRoute());
        } else {
            $path .= DIRECTORY_SEPARATOR . file_name_id('default');
        }
        
        return $path;
    }
}
