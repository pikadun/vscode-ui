<script>
    export let disabled = false;
</script>

<div class="v-button">
    <button class="v-button__button" on:click {disabled}>
        <slot />
    </button>
</div>

<style>
    .v-button {
        display: inline-block;
        margin: 5px 2px;
    }

    .v-button__button {
        width: 100%;
        height: 100%;
        color: var(--vscode-button-foreground);
        background: var(--vscode-button-background);
        border: none;
        cursor: pointer;
        padding: 2px 4px;
    }

    .v-button__button:hover {
        background: var(--vscode-button-hoverBackground);
    }

    .v-button__button:focus {
        outline: 1px solid var(--vscode-inputOption-activeBorder);
        outline-offset: 2px;
    }

    .v-button__button:disabled {
        cursor: not-allowed;
    }
</style>
