<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Versions\Version;

class Repository /**hold active contexts for the evaluated request*/
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
        return $this->activeVersion;
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
                return $id.'.'.$vRoute;
            }

            return $id.'.'.$vRoute.'.'.$this->activeCluster->getRoute();

        }

        if ($this->activeCluster) {
            return $id.'.'.$this->activeCluster->getRoute();
        }

        return $id;
    }
}
