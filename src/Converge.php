<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Support\Metadata;
use Fluxtor\Converge\TableOfContent\TableOfContent;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\Views\ViewInterceptor;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use RuntimeException;

class Converge
{
    protected ?Module $activeModule = null;

    protected $css = [__DIR__ . '/../dist/css/converge.css'];

    protected $js = __DIR__ . '/../dist/js/converge.js';

    public function setActiveModule(Module $module)
    {
        $this->activeModule = $module;

        resolve(Repository::class)->setActiveModule($this->activeModule);
    }

    public function getActiveModule(): ?Module
    {
        return $this->activeModule;
    }

    public function getPath(): string
    {
        return $this->getActiveModule()->getPath();
    }

    public function getId(): string
    {
        return $this->getActiveModule()->getId();
    }

    public function intercept($point, $context)
    {
        return resolve(ViewInterceptor::class)->render($point, $context);
    }

    public function getSidebarItems(): Collection
    {
        return $this->getActiveModule()->getSidebarItems();
    }

    public function getClusters(): Collection
    {
        return $this->getActiveModule()->getClusters();
    }

    public function getAllClusters(): Collection
    {
        return $this->getActiveModule()->allClusters();
    }

    public function getRoutePath(): string
    {
        return $this->getActiveModule()->getRoutePath();
    }

    public function getRawRoutePath(): string
    {
        return $this->getActiveModule()->getRawRoutePath();
    }

    public function getMaxDepth(): int
    {
        return $this->getActiveModule()->getMaxDepth();
    }

    public function getVersions(): Collection
    {
        return $this->getActiveModule()->getVersions();
    }

    public function hasVersions(): bool
    {
        return $this->getActiveModule()->hasVersions();
    }

    public function getUiVersions(): ?array
    {
        return $this->getActiveModule()->getUiVersions();
    }

    public function getUsedVersion(): ?Version
    {
        return $this->getActiveModule()->getUsedVersion();
    }

    public function getUsedCluster(): ?Cluster
    {
        return $this->getActiveModule()->getUsedCluster();
    }

    public function getDefaultCluster(): ?Cluster
    {
        return $this->getActiveModule()->getDefaultCluster();
    }

    public function getUiUsedVersion(): ?array
    {
        return $this->getActiveModule()->getUiUsedVersion();
    }

    public function getModule(string $id): Module
    {
        return resolve(ModuleRegistry::class)->get($id);
    }

    public function getModuleId(): ?string
    {
        return $this->getActiveModule()->getId();
    }

    public function getTableOfContent(): ?TableOfContent
    {
        return $this->getActiveModule()->getTableOfContent();
    }

    public function getMenuItems(): Collection
    {
        return $this->getActiveModule()->getMenuItems();
    }

    public function getTableOfContentHeadings(): ?Collection
    {
        return resolve(TableOfContent::class)->getHeadings();
    }

    public function getMetadata()
    {
        return resolve(Metadata::class);
    }

    public function getTheme()
    {
        return $this->getActiveModule()->getTheme();
    }

    /**
     * get all modules
     */
    public function getModules(): array
    {
        return resolve(ModuleRegistry::class)->all();
    }

    /**
     * Register or return CSS for the Pulse dashboard.
     *
     * @param  string|Htmlable|list<string|Htmlable>|null  $css
     */
    public function css(string|Htmlable|array|null $css = null): string|self
    {
        if (func_num_args() === 1) {
            $this->css = array_values(array_unique(array_merge($this->css, Arr::wrap($css)), SORT_REGULAR));

            return $this;
        }

        return collect($this->css)->reduce(function ($carry, $css) {
            if ($css instanceof Htmlable) {
                return $carry . Str::finish($css->toHtml(), PHP_EOL);
            }
            if (($contents = @file_get_contents($css)) === false) {
                throw new RuntimeException("Unable to load Converge CSS path [$css].");
            }

            return $carry . "<style>{$contents}</style>" . PHP_EOL;
        }, '');
    }

    /**
     * Return the compiled JavaScript from the vendor directory.
     */
    public function js(): string
    {
        if (($pulse = @file_get_contents($this->js)) === false) {
            throw new RuntimeException('Unable to load the Converge JavaScript.');
        }

        return "<script>{$pulse}</script>";
    }

    /**
     * return the custom footer
     */
    public function getFooter()
    {
        return $this->getActiveModule()->getFooter();
    }
}
