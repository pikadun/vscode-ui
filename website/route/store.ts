import { writable } from 'svelte/store';
import { Route } from '.';

export const route = writable({} as Route);