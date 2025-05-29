# Theme Color Customization

Converge provides built-in light and dark themes that you can customize by overriding CSS variables. The framework automatically handles theme switching and applies your customizations to both modes.

You may customize your docs design using the `theme()` function directly on the module:

```php
use Converge\Module;
use Converge\Support\Themes;

public function module(Module $module): Module
{
    return $module
        ...
        ->theme(
            Themes::overrideDark([
                '--color-base-200' => 'black',
                '--text-base' => '.94rem',
            ]),
            Themes::overrideLight([
                '--color-base-200' => 'white',
                '--text-base' => '.94rem',
            ])
        )
        ...
}
```

Alternatively, you may extract your theme configuration into a separate method for better organization:

```php
use Converge\Theme\Theme;
use Converge\Support\Themes;

public function module(Module $module): Module
{
    return $module
        ...
        ->theme(fn(Theme $theme) => $this->theme($theme))
        ...
}

private function theme(Theme $theme)
{
    return $theme
        ->theme(
            Themes::overrideDark([
                '--color-base-200' => 'black',
                '--text-base' => '.94rem',
                '--text-sm' => '.9rem',
            ]),
            Themes::overrideLight([
                '--color-base-200' => 'white',
                '--text-base' => '.94rem',
                '--text-sm' => '.9rem',
            ])
        );
}
```

@blade
<x-converge::alert type="info">
Using a separate method is recommended for complex theme configurations as it keeps your module definition clean and makes your theme configuration more maintainable.
</x-converge::alert>
@endblade

## Available CSS Variables

Converge theming is based on CSS custom properties. You may override any of the following variables to customize your documentation's appearance:

| Variable | Description | Default (Dark) | Default (Light) |
|----------|-------------|----------------|-----------------|
| `--color-base-100` | Primary background color | `oklch(20% 0 0)` | `oklch(97.788% 0.004 56.375)` |
| `--color-base-200` | Main background color | `oklch(14.1% 0.005 285.823)` | `oklch(0.985 0.001 106.423)` |
| `--color-base-300` | Used for border color | `#3838382e` | `oklch(91.586% 0.006 53.44)` |
| `--color-base-content` | Text color on base backgrounds | `oklch(0.872 0.01 258.338)` | `oklch(23.574% 0.066 313.189)` |
| `--color-primary` | Primary brand color | `#00BCFF` | `#00BCFF` |
| `--color-primary-content` | Text color on primary | `oklch(97% 0.021 166.113)` | `white` |
| `--color-secondary` | Secondary brand color | `oklch(65% 0.241 354.308)` | `oklch(89% 0.061 343.231)` |
| `--color-secondary-content` | Text color on secondary | `oklch(94% 0.028 342.258)` | `oklch(45% 0.187 3.815)` |
| `--color-accent` | Accent highlights | `oklch(77% 0.152 181.912)` | `#2878ad` |
| `--color-accent-content` | Text color on accent | `oklch(38% 0.063 188.416)` | `oklch(47% 0.157 37.304)` |
| `--color-neutral` | Neutral interface elements | `oklch(14% 0.005 285.823)` | `oklch(27% 0.006 286.033)` |
| `--color-neutral-content` | Text color on neutral | `oklch(92% 0.004 286.32)` | `oklch(92% 0.004 286.32)` |
| `--color-success` | Success state color | `oklch(76% 0.177 163.223)` | `oklch(69% 0.17 162.48)` |
| `--color-success-content` | Text color on success | `oklch(37% 0.077 168.94)` | `oklch(26% 0.051 172.552)` |
| `--color-warning` | Warning state color | `oklch(82% 0.189 84.429)` | `oklch(79% 0.184 86.047)` |
| `--color-warning-content` | Text color on warning | `oklch(41% 0.112 45.904)` | `oklch(28% 0.066 53.813)` |
| `--color-error` | Error state color | `oklch(71% 0.194 13.428)` | `oklch(64% 0.246 16.439)` |
| `--color-error-content` | Text color on error | `oklch(27% 0.105 12.094)` | `oklch(27% 0.105 12.094)` |
| `--color-info` | Information state color | `oklch(74% 0.16 232.661)` | `oklch(68% 0.169 237.323)` |
| `--color-info-content` | Text color on info | `oklch(29% 0.066 243.157)` | `oklch(29% 0.066 243.157)` |
| `--text-sm` | Small text size | `0.88rem` | `0.88rem` |
| `--text-base` | Base text size | `0.94rem` | `0.94rem` |
| `--font-weight` | Default font weight | `400` | `400` |
| `--radius-selector` | Border radius for selectors | `0.5rem` | `0.5rem` |
| `--radius-field` | Border radius for form fields | `0.75rem` | `0.75rem` |
| `--radius-box` | Border radius for containers | `1rem` | `1rem` |
| `--size-selector` | Size for selector elements | `0.25rem` | `0.25rem` |
| `--size-field` | Size for form field elements | `0.25rem` | `0.25rem` |
| `--border` | Default border thickness | `0.1px` | `0.1px` |
| `--depth` | Shadow depth | `0.25rem` | `0.25rem` |
| `--noise` | Visual texture intensity | `0.5` | `0.5` |

## Available Override Methods

You have several options for customizing your theme configuration depending on your needs.

### Dark Theme Only

When you need to customize only the dark mode appearance, use `Themes::overrideDark()` to maintain the default light theme while personalizing the dark experience:

```php
->theme(
    Themes::overrideDark([
        '--color-base-100' => '#1a1a1a',
        '--color-primary' => '#00BCFF',
        '--text-base' => '1rem',
    ])
)
```

This approach is particularly useful when your brand colors work well with the default light theme but need adjustment for dark mode readability.

### Light Theme Only

For projects that primarily use light mode or need specific light theme adjustments, you may customize only the light theme while preserving the dark theme defaults:

```php
->theme(
    null, // Keep default dark theme
    Themes::overrideLight([
        '--color-base-100' => '#ffffff',
        '--color-primary' => '#2563eb',
        '--text-base' => '1rem',
    ])
)
```

This is especially effective for corporate documentation where light mode is predominant but you still want to offer a polished dark mode experience.

### Both Themes

When you want consistent styling across both light and dark modes, use `Themes::override()` to apply the same customizations universally:

```php
->theme(
    Themes::override([
        '--text-base' => '1rem',
        '--border' => '2px',
        '--radius-box' => '0.5rem',
    ])
)
```

This method is ideal for typography adjustments, spacing modifications, or border radius changes that should remain consistent regardless of the selected theme.

## Practical Examples

Here are some real-world theme configurations that demonstrate common customization patterns.

### Custom Brand Theme

Perfect for companies wanting to align their documentation with their brand identity. This configuration applies consistent brand colors while maintaining excellent readability across both themes:

```php
->theme(
    Themes::overrideDark([
        '--color-primary' => '#ff6b35',
        '--color-accent' => '#f7931e',
        '--color-base-200' => '#0d1117',
        '--text-base' => '1rem',
    ]),
    Themes::overrideLight([
        '--color-primary' => '#d63384',
        '--color-accent' => '#fd7e14',
        '--color-base-200' => '#f8f9fa',
        '--text-base' => '1rem',
    ])
)
```

The different primary colors ensure optimal contrast in each mode while maintaining brand recognition.

## Color Format Support

Converge supports multiple color formats:

- **Hex**: `#00BCFF`, `#ffffff`
- **OKLCH**: `oklch(68% 0.169 237.323)` (recommended for consistency)
- **RGB**: `rgb(0, 188, 255)`
- **HSL**: `hsl(195, 100%, 50%)`
