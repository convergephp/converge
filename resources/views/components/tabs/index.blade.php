<div
    x-data="{
        activeId: null,
        init() {
            this.$nextTick(() => this.activate(this.$id('tab', 1)))
        },  
        activate(id) {
            this.activeId = id
        },
        isActive(id) {
            return this.activeId === id
        },
        getTabIndex(el, parent) {
            return Array.from(parent.children).indexOf(el) + 1
        }
    }"
    x-id="['tab']"
    {{ $attributes->merge(['class'=>'mx-auto dark:text-white']) }}
>    <!-- Tab List -->
<style>
    ul {
        list-style: none;
        padding-left: 0;
        margin-left: 0;
    }

    ul li {
        list-style-type: none;
    }
</style>

    <ul
        x-ref="tablist"
        x-on:keydown.right.prevent.stop="$focus.wrap().next()"
        x-on:keydown.home.prevent.stop="$focus.first()"
        x-on:keydown.page-up.prevent.stop="$focus.first()"
        x-on:keydown.left.prevent.stop="$focus.wrap().prev()"
        x-on:keydown.end.prevent.stop="$focus.last()"
        x-on:keydown.page-down.prevent.stop="$focus.last()"
        role="tablist"
       {{ $items->attributes->merge(['class'=>'flex items-center overflow-x-auto scroll-smooth scrollbar-hidden'])}}
        >
        {{ $items }}
    </ul>

    <div 
        role="tabpanels"
        x-bind:class="{
            'rounded-tl-lg': !isActive($refs.tablist.firstElementChild.firstElementChild.id),
            'rounded-tr-lg rounded-bl-lg rounded-br-lg border dark:bg-white/[0.03] bg-white dark:border-white/10 border-gray-950/10 dark:text-gray-400 text-gray-950': true
        }"
        {{ $panels->attributes }}
        >
        {{ $panels }}
    </div>
</div>

<style>
.scrollbar-hidden::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}

.scrollbar-hidden {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>