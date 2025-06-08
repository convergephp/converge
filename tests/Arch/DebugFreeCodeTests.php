<?php

it('code free from dd, dump, die funcs', function () {
    arch()
    ->expect('App')
    ->toUseStrictTypes()
    ->not->toUse(['die', 'dd', 'dump']);
});