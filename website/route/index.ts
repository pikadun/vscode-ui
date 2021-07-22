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
        window.onpopstate = () => { this.renderComponent(); };
        this.renderComponent();
    }

    push(path: string) {
        const r = this.routes.find(route => route.path === path);
        if (r === undefined) {
            throw Error(`Unknown route path: ${path}`);
        }

        window.history.pushState(null, document.title, path);
        route.update(() => r);
    }

    private renderComponent() {
        const path = window.location.pathname;
        const r = this.routes.find(route => route.path === path);
        if (r === undefined) {
            return;
        }
        route.update(() => r);
    }
}

export { default as View } from './view.svelte';
export { default as Link } from './link.svelte';
export default new Router();