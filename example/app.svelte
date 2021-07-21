<script lang="ts">
    import { View } from './route';
</script>

<header class="navbar">
    <span class="sitename">VSCODE UI</span>
    <nav class="nav-links">
        <div class="nav-item">Guide</div>
        <div class="nav-item">Component</div>
    </nav>
</header>

<View />

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        position: sticky;
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
</style>
