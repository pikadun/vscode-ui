<script lang="ts">
    import { SvelteComponentTyped } from 'svelte';
    import { route } from './store';

    /** readonly */
    export let path = '';
    let component: new (...args: never[]) => SvelteComponentTyped;
    route.subscribe((r) => {
        component = r.component;
        path = r.path;
    });
</script>

<svelte:component this={component} />
