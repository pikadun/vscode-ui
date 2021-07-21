import fs from 'fs';
import { Plugin } from 'esbuild';
import { compile, preprocess } from 'svelte/compiler';
import { typescript } from 'svelte-preprocess';
import { Warning } from 'svelte/types/compiler/interfaces';

const convertMessage = ({ message, start, end, filename, frame }: Warning) => ({
    text: message,
    location: start &&
        end && {
        file: filename,
        line: start.line,
        column: start.column,
        length: start.line === end.line ? end.column - start.column : 0,
        lineText: frame
    }
});


export default function svelte(format: 'esm' | 'cjs'): Plugin {
    return {
        name: 'svelte-typescript-plugin',
        setup(build) {
            build.onLoad({ filter: /\.svelte$/ }, async (args) => {
                const source = fs.readFileSync(args.path, 'utf-8');
                const processed = await preprocess(source, typescript(), { filename: args.path });
                const compilerOptions = {
                    css: true,
                    format,
                    filename: args.path
                };
                const { js, warnings } = compile(processed.code, compilerOptions);

                return {
                    contents: js.code,
                    warnings: warnings.map(convertMessage)
                };
            });
        }
    };
}