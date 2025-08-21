<?php

test('Not debugging statements are left in the code.', function () {
    arch()
    ->not->toUse(['die', 'dd', 'dump']);
})->skip();