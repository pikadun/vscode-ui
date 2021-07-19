/* eslint-disable */
const { typescript } = require('svelte-preprocess');
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    root: '../example',
    mount: {
        '../example': { url: '/' },
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
        entrypoints: ['./example/index.html'],
        sourcemap: false,
        bundle: true,
        minify: true,
        target: 'esnext'
    },
    buildOptions: {
        out: '../website/',
        baseUrl: './'
    }
}