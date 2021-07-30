/* eslint-disable */
const { typescript } = require('svelte-preprocess');
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        '../website': { url: '/' },
        '../package': { url: '/package' }
    },
    plugins: [
        ['@snowpack/plugin-svelte',
            {
                preprocess: typescript()
            }
        ],
        [
            '@snowpack/plugin-typescript'
        ]
    ],
    routes: [{
        match: 'routes',
        src: '.*',
        dest: 'index.html'
    }],
    optimize: {
        entrypoints: ['./website/index.html'],
        sourcemap: false,
        bundle: true,
        minify: true,
        treeshake: true,
        target: 'esnext'
    },
    buildOptions: {
        out: '../dist/',
        baseUrl: './'
    }
}