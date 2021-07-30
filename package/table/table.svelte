<script lang="ts">
    import { onMount, tick } from 'svelte';

    export let data: Record<any, any>[];
    export let border = false;
    export let overflow: 'hidden' | 'wrap' = 'wrap';

    let hiddenColumns: HTMLElement;
    let headerWrapper: HTMLElement;
    let tableWrapper: HTMLElement;
    let props: string[] = [];
    let labels: string[] = [];
    let widths: number[] = [];
    let tableWidth = '';

    const calcColumnWidths = (colWidths: number[]) => {
        const tableWidth = headerWrapper.clientWidth;
        let declaredCount = colWidths.filter((width) => width !== 0).length;
        let declaredWidth = colWidths.reduce((p, c) => p + c);
        const remainWidth = tableWidth - declaredWidth;
        const undeclared = props.length - declaredCount;

        const result = colWidths.map((width) => {
            width = width || remainWidth / undeclared;
            return width;
        });
        return result;
    };

    const aggregateColumnProps = () => {
        let colProps = [];
        let colLabels = [];
        let colWidths = [];

        for (let item of hiddenColumns.children) {
            const dataset = (item as HTMLElement).dataset;
            colProps.push(dataset['prop'] as string);
            colLabels.push(dataset['label'] as string);
            colWidths.push(parseInt(dataset['width'] as string));
        }

        props = colProps;
        labels = colLabels;
        widths = calcColumnWidths(colWidths);
    };

    onMount(async () => {
        aggregateColumnProps();
        await tick();
        tableWidth = '100%';
    });
</script>

<div class="v-table" bind:this={tableWrapper}>
    <div class="v-table__hidden-columns" bind:this={hiddenColumns}>
        <slot />
    </div>
    <table
        class="v-table__header-wrapper"
        class:v-table--border={border}
        style="width: {tableWidth};"
        bind:this={headerWrapper}
    >
        <colgroup>
            {#each widths as width}
                <col style="width: {width}px;" />
            {/each}
        </colgroup>
        <tr>
            {#each labels as label}
                <th class:v-table--border={border}>{label}</th>
            {/each}
        </tr>
    </table>
    <table
        class="v-table__body-wrapper"
        class:v-table--border={border}
        style="width: {tableWidth};"
    >
        <colgroup>
            {#each widths as width}
                <col style="width: {width}px;" />
            {/each}
        </colgroup>
        {#each data as item}
            <tr>
                {#each props as prop}
                    <td
                        class="v-table__column-{overflow}"
                        class:v-table--border={border}>{item[prop]}</td
                    >
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    .v-table {
        height: 100%;
        overflow-y: auto;
    }

    .v-table--border {
        border: 1px solid var(--vscode-tree-tableColumnsBorder);
        border-collapse: collapse;
    }

    .v-table__header-wrapper {
        background: var(--vscode-editor-background);
        position: sticky;
        top: 0;
        table-layout: fixed;
    }

    .v-table__body-wrapper {
        margin-top: -1px;
        table-layout: fixed;
    }

    .v-table__column-hidden {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .v-table__column-wrap {
        word-break: break-all;
    }
</style>
