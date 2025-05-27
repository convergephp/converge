<?php

declare(strict_types=1);

namespace Converge\Commands;

use Composer\InstalledVersions;
use Illuminate\Console\Command;

class MakeIssueCommand extends Command
{
    protected $signature = 'converge:make-issue';

    protected $description = 'Generates a link to the converge issue page and pre-fills the version numbers.';

    public function handle(): void
    {
        $url = 'https://github.com/convergephp/converge/issues/new?'.http_build_query([
            'template' => 'bug_report.yml',
            'package-version' => InstalledVersions::getPrettyVersion('convergephp/converge'),
            'laravel-version' => InstalledVersions::getPrettyVersion('laravel/framework'),
            'php-version' => PHP_VERSION,
        ]);

        $result = $this->openUrlInBrowser($url);

        if ($result !== 0) {
            $this->components->error('An error occurred while trying to open the issue page in your browser.');
            $this->output->writeln('  <comment>Please open the following URL in your browser:</>');
            $this->output->writeln('  <href="'.$url.'">'.$url.'</>');
        }
    }

    public function openUrlInBrowser(string $url): int
    {
        $result = -1;

        if (PHP_OS_FAMILY === 'Darwin') {
            exec('open "'.$url.'"', result_code: $result);
        }
        if (PHP_OS_FAMILY === 'Linux') {
            exec('xdg-open "'.$url.'"', result_code: $result);
        }
        if (PHP_OS_FAMILY === 'Windows') {
            exec('start "" "'.$url.'"', result_code: $result);
        }

        return $result;
    }
}
