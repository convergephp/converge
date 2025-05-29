# Layout Customization

Converge provides several pre-built layouts that are responsive and consistent with your [theming](https://convergephp.com/docs/customization/themes) customizations. Each layout offers a unique visual structure and user experience tailored for different documentation needs.

You may customize your documentation layout using the `layout()` function directly on the module:

```php
use Converge\Module;
use Converge\Enums\Layout;
use Converge\Theme\Theme;

public function module(Module $module): Module
{
    return $module
                ->theme(function(Theme $theme) {
                     return $theme->layout(Layout::Default);
                }
}
```

Alternatively, you may extract your layout configuration into a separate method for better organization:

```php
use Converge\Theme\Theme;
use Converge\Enums\Layout;
use Converge\Theme\Theme;


public function module(Module $module): Module
{
    return $module
                ->theme(fn(Theme $theme) => $this->theme($theme));
}

private function theme(Theme $theme)
{
    return $theme
              ->layout(Layout::Spacious);
}
```

@blade
<x-converge::alert type="info">
All layouts are fully responsive and automatically adapt to your custom theme colors and typography settings, ensuring a consistent brand experience across all devices.
</x-converge::alert>
@endblade

## Available Layouts

Converge offers five distinct layouts, each designed for specific use cases and aesthetic preferences:

| Layout | Value | Best For | Key Features |
|--------|-------|----------|--------------|
| **Default** | `Layout::Default` | General documentation | Balanced content width, standard navigation |
| **Spacious** | `Layout::Spacious` | Content-heavy docs | Wide content area, generous whitespace |
| **Aurum** | `Layout::Aurum` | Premium documentation | Elegant design, refined typography |
| **Lumen** | `Layout::Lumen` | Modern interfaces | Clean aesthetics, focused content |
| **Minimal** | `Layout::Minimal` | Distraction-free reading | Stripped-down interface, maximum content focus |
