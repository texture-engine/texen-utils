/// <reference path="../gradient/gradient.ts" />
/// <reference path="dtd-enums.ts" />

module tx {
    'use strict';

    export interface IDtd {
        render:IDtdRenders;
        textures:IDtdFeatures;
        functions:IDtdFeatures;
        gradients:IGradients;
        [key:string]:IDtdRenders|IGradients|IDtdFeatures;
    }

    export interface IDtdCommon {
        name?:string;
        family?:string;
    }

    export interface IDtdRender extends IDtdCommon {
        params:IDtdParams;
    }

    export interface IDtdFeature extends IDtdCommon {
        role:Roles;
        kind:Kinds;
        is3d:boolean;
        scale?:number;
        invert?:boolean;
        description?:string;
        preview?:boolean;
        params:IDtdParams;
    }

    export interface IDtdParams {
        [index:string]:IDtdParam;
    }

    export interface IDtdRenders {
        [index:string]:IDtdRender;
    }

    export interface IDtdFeatures {
        [index:string]:IDtdFeature;
    }

    export interface IGradients {
        [index:string]:IGradient;
    }

    export interface IDtdParam {
        type:Types;
        min?:number;
        max?:number;
        value?:number|boolean|any[]|string;
        // values?:{[index:string]:number};
        values?:any;
        optional?:boolean;
    }
}
