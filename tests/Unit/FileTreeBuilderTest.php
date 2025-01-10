<?php

use Fluxtor\Converge\FilesTreeBuilder;

// function dd($var) {
//     echo "<pre>";
//     var_dump($var);
//     echo "</pre>";
//     die;
// }
$stubs = realpath(__DIR__ . '/../stubs/docs');

// die;

$result = FilesTreeBuilder::build($stubs);

dd($result);
