<script lang="ts">
    export let type: 'index' | '' = '';
    export let prop: string = '';
    export let label: string;
    export let width: string | number = 0;
</script>

<span
    class="v-column"
    data-type={type}
    data-prop={prop}
    data-label={label}
    data-width={width}
>
    <slot />
</span>
