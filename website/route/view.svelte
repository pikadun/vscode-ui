<script lang="ts">
    import { SvelteComponentTyped } from 'svelte';
    import { route } from './store';

    let component: new (...args: never[]) => SvelteComponentTyped;
    route.subscribe((r) => {
        component = r.component;
    });
</script>

<svelte:component this={component} />
