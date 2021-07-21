<script lang="ts">
    import router from './index';

    export let to: string;
</script>

<slot
    onclick={() => {
        router.push(to);
    }}
/>
