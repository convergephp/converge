@props(['title', 'subtitle', 'icon' => 'iconsax-bul-quote-down-square', 'url' => '#'])
<?php
$iconExist = true;
$iconContent = '';
try {
    $iconContent = @svg($icon, 'w-8 h-8 fill-primary');
} catch (\Exception $e) {
    $iconExist = false;
}
?>

<div
     {{ $attributes->merge(['class' => 'block not-prose  group relative  ring-2 ring-transparent rounded-box light:bg-base-100 bg-base-200 border border-gray-400/20  overflow-hidden w-full cursor-pointer hover:!border-primary/60 px-6 py-5']) }}>
    <a href="{{ $url }}"
       class="flex flex-col space-y-2 text-left">
        <div class="flex items-center justify-between">
            <div class="!text-primary rounded-box mb-1 flex items-center justify-center">
                <?php if($iconExist && $iconContent): ?>
                {{ $iconContent }}
                <?php else: ?>
                <div title="Icon '{{ $icon }}' not found"
                     class="bg-error flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium text-gray-500">
                    <span>?</span>
                </div>
                <?php endif ?>
            </div>

            {{-- Link icon --}}
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 class="lucide lucide-arrow-up-right group-hover:fill-primary h-4 w-4">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
            </svg>
        </div>

        <div class="space-y-1">
            <span class="text-base-content text-lg font-semibold">{{ $title }}</span>
            <p class="mt-2 text-sm !text-gray-400">{{ $subtitle }}</p>
        </div>
    </a>
</div>
