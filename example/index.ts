import 'svelte';
import App from './page/index.svelte';
import '../package/main.css';

const app = new App({
    target: document.body
});

export default app;