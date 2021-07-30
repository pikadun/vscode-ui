<script lang="ts">
    import Input from '../../package/input/input.svelte';
    import Table from '../../package/table/table.svelte';
    import Column from '../../package/table/column.svelte';

    const attributes = [
        {
            attribute: 'type',
            description: 'Type of Input',
            type: 'string',
            accepted: 'text/textarea/number/password',
            default: 'text',
        },
        {
            attribute: 'value',
            description: 'Binding value',
            type: 'string | number',
            accepted: '--',
            default: '--',
        },
        {
            attribute: 'placeholder',
            description: 'Same as placeholder in native Input',
            type: 'string',
            accepted: '--',
            default: '--',
        },
        {
            attribute: 'readonly',
            description: 'Same as readonly in native Input',
            type: 'boolean',
            accepted: 'true/false',
            default: 'false',
        },
    ];
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

<h2>Input Attributes</h2>
<Table data={attributes} border>
    <Column prop="attribute" label="Attribute" width="180" />
    <Column prop="description" label="Description" />
    <Column prop="type" label="Type" />
    <Column prop="accepted" label="Accepted Values" />
    <Column prop="default" label="Default" />
</Table>

<h2>Forward Event</h2>

<p>
    The following events will be forwarded to the native Input <em>click</em>,
    <em>blur</em>.
</p>
