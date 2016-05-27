/// <reference path="../gradient/gradient.ts" />

module tx {
    'use strict';

    export interface IData {
        type:string;
        source?:string;
        min?:number;
        max?:number;
    }

    export interface IRender extends IData {
        scale:number;
    }

    export interface IFeature extends IData {
    }
}
