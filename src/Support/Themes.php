<?php

namespace Fluxtor\Converge\Support;

class Themes
{
    /**
     * light schema
     */
    public const LIGHT = [
        '--color-base-100' => 'oklch(97.788% 0.004 56.375)',
        '--color-base-200' => 'oklch(93.982% 0.007 61.449)',
        '--color-base-300' => 'oklch(91.586% 0.006 53.44)',
        '--color-base-content' => 'oklch(23.574% 0.066 313.189)',
        '--color-primary' => '#2878ad',
        '--color-primary-content' => 'white',
        '--color-secondary' => 'oklch(89% 0.061 343.231)',
        '--color-secondary-content' => 'oklch(45% 0.187 3.815)',
        '--color-accent' => '#2878ad',
        '--color-accent-content' => 'oklch(47% 0.157 37.304)',
        '--color-neutral' => 'oklch(27% 0.006 286.033)',
        '--color-neutral-content' => 'oklch(92% 0.004 286.32)',
        '--color-info' => 'oklch(68% 0.169 237.323)',
        '--color-info-content' => 'oklch(29% 0.066 243.157)',
        '--color-success' => 'oklch(69% 0.17 162.48)',
        '--color-success-content' => 'oklch(26% 0.051 172.552)',
        '--color-warning' => 'oklch(79% 0.184 86.047)',
        '--color-warning-content' => 'oklch(28% 0.066 53.813)',
        '--color-error' => 'oklch(64% 0.246 16.439)',
        '--color-error-content' => 'oklch(27% 0.105 12.094)',
        '--radius-selector' => '1rem',
        '--radius-field' => '2rem',
        '--radius-box' => '0PX',
        '--size-selector' => '0.25rem',
        '--size-field' => '0.25rem',
        '--border' => '2px',
        '--depth' => '1',
        '--noise' => '0',
        '--text-sm' => '0.89rem',
    ];

    /**
     * dark schema
     */
    public const DARK = [
        '--color-base-100' => 'oklch(20% 0 0)',
        '--color-base-200' => 'oklch(26% 0 0)',
        '--color-base-300' => 'oklch(21% 0.006 285.885)',
        '--color-base-content' => 'oklch(96% 0.001 286.375)',
        '--color-primary' => 'oklch(40% 0.17 325.612)',
        '--color-primary-content' => 'oklch(97% 0.021 166.113)',
        '--color-secondary' => 'oklch(65% 0.241 354.308)',
        '--color-secondary-content' => 'oklch(94% 0.028 342.258)',
        '--color-accent' => 'oklch(77% 0.152 181.912)',
        '--color-accent-content' => 'oklch(38% 0.063 188.416)',
        '--color-neutral' => 'oklch(14% 0.005 285.823)',
        '--color-neutral-content' => 'oklch(92% 0.004 286.32)',
        '--color-info' => 'oklch(74% 0.16 232.661)',
        '--color-info-content' => 'oklch(29% 0.066 243.157)',
        '--color-success' => 'oklch(76% 0.177 163.223)',
        '--color-success-content' => 'oklch(37% 0.077 168.94)',
        '--color-warning' => 'oklch(82% 0.189 84.429)',
        '--color-warning-content' => 'oklch(41% 0.112 45.904)',
        '--color-error' => 'oklch(71% 0.194 13.428)',
        '--color-error-content' => 'oklch(27% 0.105 12.094)',
        '--radius-selector' => '0.5rem',
        '--radius-field' => '3',
        '--radius-box' => '0.5rem',
        '--size-selector' => '0.25rem',
        '--size-field' => '0.25rem',
        '--border' => '1px',
        '--depth' => '0',
        '--noise' => '1',
        '--text-sm' => '0.89rem',
    ];

    public const BLACK = [
        '--color-base-100' => 'oklch(0% 0 0)',
        '--color-base-200' => 'oklch(15% 0 0)',
        '--color-base-300' => 'black',
        '--color-base-content' => '#a3a3a3',
        '--color-primary' => '#750979',
        '--color-primary-content' => 'oklch(100% 0 0)',
        '--color-secondary' => 'oklch(35% 0 0)',
        '--color-secondary-content' => 'oklch(100% 0 0)',
        '--color-accent' => '#348ceb',
        '--color-accent-content' => 'oklch(100% 0 0)',
        '--color-neutral' => 'oklch(35% 0 0)',
        '--color-neutral-content' => 'oklch(100% 0 0)',
        '--color-info' => 'oklch(45.201% 0.313 264.052)',
        '--color-info-content' => 'oklch(89.04% 0.062 264.052)',
        '--color-success' => 'oklch(51.975% 0.176 142.495)',
        '--color-success-content' => 'oklch(90.395% 0.035 142.495)',
        '--color-warning' => 'oklch(96.798% 0.211 109.769)',
        '--color-warning-content' => 'oklch(19.359% 0.042 109.769)',
        '--color-error' => 'oklch(62.795% 0.257 29.233)',
        '--color-error-content' => 'oklch(12.559% 0.051 29.233)',
        '--radius-selector' => '0rem',
        '--radius-field' => '5px',
        '--radius-box' => '1rem',
        '--size-selector' => '0.25rem',
        '--size-field' => '3rem',
        '--border' => '1px',
        '--depth' => '0',
        '--noise' => '0',
        '--text-sm' => '0.89rem',
    ];
}
