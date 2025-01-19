<?php

declare(strict_types=1);

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\UseModule;
use Fluxtor\Converge\Http\Middleware\UseVersion;
use Fluxtor\Converge\Routing\RouteManager;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Facades\Route;

(new RouteManager())->generateRoutes();

// foreach (Converge::getModules() as $module) {
//     $uri = $module->getRoutePath();
//     $moduleId = $module->getId();
//     $pattern = '.*';
//     $name = $moduleId;


//     if ($module->hasVersions()) {
//         foreach ($module->getVersions() as $version) {
//             if (! $version instanceof Version) {
//                 continue;
//             }

//             // $versionUri = $uri;
//             $versionUri = $uri. '/' . $version->getRoute();
//             $versionName = $name . '.' . $version->getRoute();
//             generateRoutes($versionUri, $moduleId, $versionName, versionId: $version->getRoute());
//         }

//         $excludedVersions = implode('|', array_map(
//             fn($v) => preg_quote($v->getRoute(), '/'),
//             $module->getVersions()
//                 ->filter(
//                     fn($version) => $version instanceof Version
//                 )->toArray()
//         ));
//         $pattern = "^(?!($excludedVersions))(.*)$";
//     }

//     generateRoutes($uri, $moduleId, $name, $pattern);

// }

// function generateRoutes(string $uri, string $id, string $name, string $pattern = '.*', ?string $versionId = null)
// {
//     $params = $versionId ? "$id,$versionId" : $id;

//     Route::middleware([UseModule::class . ':' . $id, UseVersion::class . ':' . $params])->group(function () use ($name, $uri, $pattern) {
//         Route::get($uri, ModuleController::class)->name($name);

//         Route::get("{$uri}/{url}", FileController::class)
//             ->where('url', $pattern)
//             ->name("{$name}.show");
//     });
// }
