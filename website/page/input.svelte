<script lang="ts">
    import Input from '../../package/input.svelte';
</script>

<h1>Input</h1>

<h2>Basic usage</h2>
<Input placeholder="please input..." />

<h2>Password</h2>
<Input type="password" value="abc" />

<h2>Number</h2>
<Input type="number" value="123" />

<h2>Textarea</h2>
<Input type="textarea" value="100" />
