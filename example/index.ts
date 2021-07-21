import 'svelte';
import '../package/main.css';
import router from './route/index';
import App from './app.svelte';
import Index from './page/index.svelte';

router.register([
    { path: '/', component: Index }
]);

new App({
    target: document.body
});