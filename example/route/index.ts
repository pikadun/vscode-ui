import { SvelteComponentTyped } from 'svelte';
import { route } from './store';

export interface Route {
    path: string;
    component: new (...args: never[]) => SvelteComponentTyped
}

class Router {
    private routes = [] as Route[];
    register(routes: Route[]) {
        this.routes = routes;
        this.push(window.location.pathname);
    }

    push(path: string) {
        const r = this.routes.find(route => route.path === path);
        if (r === undefined) {
            console.error(`Unknown route path: ${path}`);
            return;
        }

        window.history.pushState(null, document.title, path);
        route.update(() => r);
    }
}

export { default as View } from './view.svelte';
export { default as Link } from './link.svelte';
export default new Router();