<script lang="ts">
    import { Link } from '../route';
    export let showSideBar = true;
</script>

<header class="navbar">
    <Link to="/"><span class="sitename">VSCODE UI</span></Link>
    <nav class="nav-links">
        <Link to="/guide"><div class="nav-item">Guide</div></Link>
    </nav>
</header>

<div class="content">
    {#if showSideBar}
        <div class="sidebar">
            <Link to="/guide"><li>Guide</li></Link>
            <Link to="/input"><li>Input</li></Link>
        </div>
    {/if}
    <div class="main">
        <slot />
    </div>
</div>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        background: var(--vscode-menu-background);
        color: var(--vscode-menu-foreground);
        padding: 1rem;
    }

    .sitename {
        font-size: 1.5rem;
        cursor: pointer;
    }

    .nav-links {
        display: flex;
        align-items: center;
        font-size: 1rem;
    }

    .nav-item {
        padding: 0 0.5rem;
        cursor: pointer;
    }

    .content {
        display: flex;
        overflow: hidden;
    }

    .sidebar {
        background: var(--vscode-sideBar-background);
        color: var(--vscode-sideBarTitle-foreground);
        width: max-content;
        min-width: 15vw;
        height: 100%;
        padding: 5px 0;
    }

    .sidebar li {
        padding: 5px 20px;
        list-style: none;
        cursor: pointer;
    }

    .sidebar li:hover {
        background: var(--vscode-toolbar-hoverBackground);
    }

    .main {
        padding: 10px 20px;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>
