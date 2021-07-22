import 'svelte';
import '../package/main.css';
import router from './route/index';
import App from './app.svelte';
import Index from './page/index.svelte';
import Guide from './page/guide.svelte';

router.register([
    { path: '/', component: Index },
    { path: '/guide', component: Guide },
]);

new App({
    target: document.body
});