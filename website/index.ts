import 'svelte';
import '../package/main.css';
import router from './route/index';
import App from './app.svelte';
import Index from './page/index.svelte';
import Guide from './page/guide.svelte';
import Input from './page/input.svelte';

router.register([
    { path: '/', component: Index },
    { path: '/guide', component: Guide },
    { path: '/input', component: Input },
]);

new App({
    target: document.body
});