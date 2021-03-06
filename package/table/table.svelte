<script lang="ts">
    import { onMount, tick } from 'svelte';

    export let data: Record<any, any>[];
    export let border = false;
    export let overflow: 'hidden' | 'wrap' = 'wrap';
    export let height = '';

    export function selectRow(index: number = -1) {
        selectedRowNumber = index;
        return data[index];
    }

    let hiddenColumns: HTMLDivElement;
    let headerWrapper: HTMLTableElement;
    let tableWrapper: HTMLDivElement;
    let props: string[] = [];
    let labels: string[] = [];
    let widths: number[] = [];
    let types: string[] = [];
    let tableWidth = '';
    let selectedRowNumber = -1;

    const calcColumnWidths = (colWidths: string[]) => {
        let widths = colWidths.map((w) => parseInt(w));
        const tableWidth = headerWrapper.clientWidth;
        let declaredCount = widths.filter((width) => width !== 0).length;
        let declaredWidth = widths.reduce((p, c) => p + c);
        const remainWidth = tableWidth - declaredWidth;
        const undeclared = props.length - declaredCount;

        const result = widths.map((width) => {
            width = width || remainWidth / undeclared;
            return width;
        });
        return result;
    };

    const aggregateColumnProps = () => {
        const attributes: Record<string, any> = {};
        for (let item of hiddenColumns.children) {
            const dataset = (item as HTMLElement).dataset;

            Object.entries(dataset).forEach(([attribute, value]) => {
                if (attributes[attribute] === undefined) {
                    attributes[attribute] = [value];
                } else {
                    attributes[attribute].push(value);
                }
            });
        }

        props = attributes['prop'] as string[];
        labels = attributes['label'] as string[];
        widths = calcColumnWidths(attributes['width']);
        types = attributes['type'] as string[];
    };

    onMount(async () => {
        aggregateColumnProps();
        await tick();
        tableWidth = '100%';
    });
</script>

<div class="v-table" bind:this={tableWrapper} style="height: {height};">
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
                <th
                    class="v-table__cell {border
                        ? 'v-table--border'
                        : 'v-table--noborder'}">{label}</th
                >
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
        {#each data as item, rowNumber}
            <tr
                class="v-table__row"
                class:v-table__row-selected={rowNumber === selectedRowNumber}
                on:click={() => {
                    selectedRowNumber = rowNumber;
                }}
            >
                {#each props as prop, index}
                    <td
                        class="v-table__cell v-table__cell-{overflow} {border
                            ? 'v-table--border'
                            : 'v-table--noborder'}"
                    >
                        {types[index] === 'index' ? rowNumber : item[prop]}
                    </td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    .v-table {
        overflow-y: auto;
    }

    .v-table--border {
        border: 1px solid var(--vscode-tree-tableColumnsBorder);
        border-collapse: collapse;
    }

    .v-table--noborder {
        border-bottom: 1px solid var(--vscode-tree-tableColumnsBorder);
        border-collapse: collapse;
    }

    .v-table__hidden-columns {
        display: none;
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

    .v-table__row:hover {
        background: var(--vscode-list-hoverBackground);
    }

    .v-table__row-selected {
        background: var(--vscode-list-inactiveSelectionBackground);
        color: var(--vscode-list-activeSelectionForeground);
    }

    .v-table__cell {
        padding: 2px 4px;
    }

    .v-table__cell-hidden {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .v-table__cell-wrap {
        word-break: break-all;
    }
</style>
