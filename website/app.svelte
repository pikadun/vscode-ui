<script lang="ts">
    import { View } from './route';
    import Layout from './component/layout.svelte';

    let path = '';
</script>

<Layout showSideBar={path !== '/'}>
    <View bind:path />
</Layout>
