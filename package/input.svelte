<script lang="ts">
    import { onMount } from 'svelte';
    export let type: 'text' | 'number' | 'password' | 'textarea' = 'text';
    export let placeholder = '';
    export let value: string | number = '';
    export let readonly = false;
    export let style = '';

    const color = document.body.classList[0];
    let element: HTMLInputElement;
    onMount(() => {
        if (element) {
            element.type = type;
        }
    });
</script>

<div class="v-input" {style} class:v-input-light={color === 'vscode-light'}>
    {#if type === 'textarea'}
        <textarea
            class="v-input__textarea"
            {placeholder}
            {readonly}
            bind:value
            on:click
            on:blur
        />
    {:else}
        <input
            class="v-input__input"
            {placeholder}
            {readonly}
            bind:value
            bind:this={element}
            on:click
            on:blur
        />
    {/if}
</div>

<style>
    .v-input {
        display: inline-block;
        margin: 5px 2px;
    }

    .v-input-light {
        border: 1px solid var(--vscode-settings-textInputBorder);
    }

    .v-input__input,
    .v-input__textarea {
        width: 100%;
        height: 100%;
        background: var(--vscode-input-background);
        color: var(--vscode-input-foreground);
        border: none;
        padding: 2px 4px;
    }

    .v-input__input:focus,
    .v-input__textarea:focus {
        outline: 1px solid var(--vscode-inputOption-activeBorder);
    }

    .v-input__input::placeholder,
    .v-input__textarea::placeholder {
        color: var(--vscode-input-placeholderForeground);
    }

    .v-input__textarea {
        resize: none;
    }
</style>
