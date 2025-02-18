@props([
    'breadcrumbs' => [],
])

<div class="flex min-w-0 ml-4 space-x-3 text-sm leading-6 whitespace-nowrap">
    @foreach ($breadcrumbs as $url => $label)
        <div class="flex items-center space-x-3">
            @if (!$loop->first)
                <svg width="3" height="24" viewBox="0 -9 3 24" class="h-5 overflow-visible rotate-0 fill-gray-400">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    </path>
                </svg>
            @endif

            @if (is_int($url))
                <span class="font-semibold text-gray-900 truncate dark:text-gray-200">{{ $label }}</span>
            @else
                <a href="{{ env('APP_URL') . $url }}"
                    class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-200">
                    {{ $label }}
                </a>
            @endif
        </div>
    @endforeach
</div>
