/// <reference path="../formula/formula.ts" />
/// <reference path="../dtd/dtd.ts" />

module tx {
    'use strict';

    export class Partial {
        family:Families;
        id:string;
        formula:Formula;
        gradient:IGradient;
        color:IColorStop;
        parent:Partial;
        data:IData;

        constructor(family:Families,
                    id:string,
                    formula:Formula,
                    data:IData = undefined,
                    gradient:IGradient = undefined,
                    color:IColorStop = undefined,
                    parent:Partial = undefined) {
            this.family = family;
            this.id = id;
            this.formula = formula;
            this.gradient = gradient;
            this.color = color;
            this.parent = parent;
            this.data = data;
        }
    }
}
