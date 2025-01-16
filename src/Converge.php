<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use RuntimeException;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Support\Htmlable;

class Converge
{
    protected ?Module $activeModule = null;

    protected $css = [__DIR__ . '/../dist/css/converge.css'];

    protected $js = __DIR__ . '/../dist/js/converge.js';

    public function setActiveModule(Module $module)
    {
        $this->activeModule = $module;
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

    public function getSidebarItems(): Collection
    {
        return $this->getActiveModule()->getSidebarItems();
    }

    public function getClusters(): Collection
    {
        return $this->getActiveModule()->getClusters();
    }

    public function getVersions(): Collection
    {
        return $this->getActiveModule()->getVersions();
    }

    public function getModule(string $id): Module
    {
        return resolve(ModuleRegistry::class)->get($id);
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
            } else {
                if (($contents = @file_get_contents($css)) === false) {
                    throw new \RuntimeException("Unable to load Pulse dashboard CSS path [$css].");
                }

                return $carry . "<style>{$contents}</style>" . PHP_EOL;
            }
        }, '');
    }
    /**
     * Return the compiled JavaScript from the vendor directory.
     */
    public function js(): string
    {
        if (($pulse = @file_get_contents($this->js)) === false) {
            throw new RuntimeException('Unable to load the Pulse dashboard JavaScript.');
        }

        return "<script>{$pulse}</script>";
    }
}
