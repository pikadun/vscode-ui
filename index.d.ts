/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvelteComponentTyped } from 'svelte';

export declare class Input extends SvelteComponentTyped<{
    type?: 'text' | 'number' | 'password' | 'textarea';
    placeholder?: string;
    value?: string | number;
    readonly?: boolean;
    style?: string;
}, {
    click: WindowEventMap['click'];
    blur: WindowEventMap['blur'];
}> { }

export declare class Button extends SvelteComponentTyped<{
    disabled?: false;
}, {
    click: WindowEventMap['click'];
}> { }

export declare class Table extends SvelteComponentTyped<{
    data: Record<any, any>[];
    border?: boolean;
    overflow?: 'hidden' | 'wrap';
    height?: string;
    selectRow: () => Record<any, any> | undefined
}> { }


export declare class Column extends SvelteComponentTyped<{
    prop: string;
    label: string;
    width?: string | number;
}> { }