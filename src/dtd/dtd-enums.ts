/// <reference path="../gradient/gradient.ts" />

module tx {
    'use strict';

    export enum Roles {
        generator,
        modifier,
        colorizer,
        combiner,
        special
    }

    export enum Kinds {
        pattern,
        renderer,
        math,
        transform,
        equalizer,
        noise,
        fractal,
        warp,
        blend,
        heightmap,
        calculator,
        cache,
        composer,
        colorscale,
        filter,
        constant,
        colorizer
    }

    export enum Types {
        bool,
        int,
        float,
        enumeration,
        function,
        texture,
        gradient,
        mixmap,
        formula
    }

    export var LinkTypes:Array<Types> = [
        Types.function,
        Types.texture,
        Types.gradient,
        Types.mixmap,
    ];

    export enum Families {
        functions,
        textures,
        gradients,
        colors,
        renders,
    }
}
