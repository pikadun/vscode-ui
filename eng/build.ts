import { build } from 'esbuild';
import pkg from '../package.json';
import svelte from './svelte';

build({
    entryPoints: ['./index.ts'],
    format: 'cjs',
    bundle: true,
    outfile: pkg.main,
    plugins: [svelte('cjs')],
    logLevel: 'info',
    external: ['svelte']
});

build({
    entryPoints: ['./index.ts'],
    format: 'esm',
    bundle: true,
    outfile: pkg.module,
    plugins: [svelte('esm')],
    logLevel: 'info',
    external: ['svelte']
});

build({
    entryPoints: ['./package/main.css'],
    minify: true,
    outfile: pkg.style,
    logLevel: 'info'
});