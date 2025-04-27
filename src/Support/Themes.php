<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Support;

class Themes
{
    /**
     * light schema
     */
    public static array $LIGHT = [
        '--color-base-100' => 'oklch(97.788% 0.004 56.375)',
        '--color-base-200' => 'oklch(0.985 0.001 106.423)',
        '--color-base-300' => 'oklch(91.586% 0.006 53.44)',
        '--color-base-content' => 'oklch(23.574% 0.066 313.189)',
        '--color-primary' => '#00BCFF',
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
        '--radius-selector' => '0.5rem',
        '--radius-field' => '0.75rem',
        '--radius-box' => '1rem',
        '--size-selector' => '0.25rem',
        '--size-field' => '0.25rem',
        '--border' => '.1px',
        '--depth' => '0.25rem',
        '--noise' => '0.5',
        '--text-sm' => '0.88rem',
        '--text-base' => '0.94rem',
        '--font-weight' => '400',
    ];

    /**
     * dark schema
     */
    public static array $DARK = [
        '--prose-bg' => 'black',
        '--color-base-100' => 'oklch(20% 0 0)',
        '--color-base-200' => 'oklch(14.1% 0.005 285.823)',
        '--color-base-300' => '#3838382e',
        '--color-base-content' => 'oklch(0.872 0.01 258.338)',
        '--color-primary' => '#00BCFF',
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
        '--radius-field' => '.75rem',
        '--radius-box' => '1rem',
        '--size-selector' => '0.25rem',
        '--size-field' => '0.25rem',
        '--border' => '.1px',
        '--depth' => '0.25rem',
        '--noise' => '0.5',
        '--text-sm' => '0.88rem',
        '--text-base' => '0.94rem',
        '--font-weight' => '400',
    ];

    // can be used to override variables for both themes
    public static function override(array $palettes = [])
    {
        return [
            'darkModeTheme' => static::overrideDark($palettes),
            'lightModeTheme' => static::overrideLight($palettes),
        ];
    }

    public static function overrideDark(array $palettes = [])
    {
        return array_merge(self::$DARK, $palettes);
    }

    public static function overrideLight(array $palettes = [])
    {
        return self::$LIGHT = array_merge(self::$LIGHT, $palettes);
    }
}
