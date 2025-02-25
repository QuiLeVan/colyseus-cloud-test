/**
 * This file contains only relevant parts of Cocos Creator to build colyseus.js
 * For full Cocos Creator definition file, see: https://github.com/toddlxt/Creator-TypeScript-Boilerplate/blob/master/creator.d.ts
 */

declare namespace cc {
    export const resources: {
        load<T>(path: string, type: { prototype: T }, callback: (err: Error | null, asset: T) => void): void;
    };

    export class TextAsset {
        text: string;
    }
}

declare const cc: typeof cc;
