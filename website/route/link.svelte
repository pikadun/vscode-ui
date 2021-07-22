<script lang="ts">
    import router from './index';

    export let to: string;

    const active = () => {
        router.push(to);
    };
</script>

<span on:click={active}>
    <slot />
</span>
