<!-- resources/views/components/alert.blade.php -->
@props([
    'type' => 'primary',
    'icon' => true,
    'title' => null,
])

@php
    $classes =
            [
                'warning' => 'bg-warning/5',
                'primary' => 'bg-primary/5',
                'error' => 'bg-error/5',
                'success' => 'bg-success/5',
                'info' => 'bg-info/5',
                'ghost' => 'bg-base-200',
            ][$type] ?? 'bg-base-200';

    $icons =
        [
            'primary' =>
                '<svg class="fill-primary h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"></path></svg>',
            'success' =>
                '<svg class="fill-success h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>',
            'error' =>
                '<svg class="fill-error h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>',
            'warning' =>
                '<svg class="fill-warning h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>',
            'info' =>
                '<svg class="fill-info h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"></path></svg>',
        ][$type] ??
        '<svg class="fill-primary h-7 w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"></path></svg>';
@endphp

<div x-data='{dismisable: true}'
     x-show='dismisable'
     {{ $attributes->merge(['class' => "flex px-2 py-1 mb-4 border border-gray-400/20 rounded-box {$classes}"]) }}
     role="alert">
    @if ($icon)
        <div class="mr-3 flex flex-shrink-0 items-center">
            {!! $icons !!}
        </div>
    @endif
    <div class="flex flex-1 flex-col justify-start py-1 text-start">
        @if (isset($title))
            <span class="mt-0 font-semibold">{{ $title }}</h3>
        @endif
        <div class="flex flex-1 items-center text-sm font-light">
            {{ $slot }}
        </div>
    </div>
</div>
