<section
    x-show="isActive($id('tab', getTabIndex($el, $el.parentElement)))"
    x-bind:aria-labelledby="$id('tab', getTabIndex($el, $el.parentElement))"
    role="tabpanel"
    {{ $attributes->merge([
        'class'=>'p-2'
    ]) }}
    {{ $attributes }}
>
    {{ $slot }}
</section>