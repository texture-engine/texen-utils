module tx {
    'use strict';

    export interface IColorStop extends Array<number> {
    }

    export interface IGradient extends Array<IColorStop> {
    }
}
