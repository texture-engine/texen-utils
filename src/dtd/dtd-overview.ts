/// <reference path="Dtd.ts" />
/// <reference path="../common/utils.ts" />

module tx {
    'use strict';

    class InputCounter {
        functions:number = 0;
        textures:number = 0;
        gradients:number = 0;
        params:number = 0;
    }

    export class DtdOverview {
        private static _overview:DtdOverview;

        keys:Array<string> = [];
        features:{[index:string]:any} = {};
        ids:{[index:string]:string} = {};

        public static getOverview():DtdOverview {
            return DtdOverview._overview || (DtdOverview._overview = new DtdOverview());
        }

        constructor() {
            this.addKeys(Dtd.functions);
            this.addKeys(Dtd.textures);
            this.keys.sort();
            Utils.forEach(this.keys, this.addIdAndFeatures, this);
        }

        private addKeys(obj:IDtdFeatures):void {
            Utils.forEach(
                obj,
                function (v:IDtdFeature, k:string):void {
                    if (this.keys.indexOf(k) === -1) {
                        this.keys.push(k);
                    }
                },
                this
            );
        }

        private countParams(params:IDtdParams):InputCounter {
            var c:InputCounter = new InputCounter();

            Utils.forEach(params, function (p:IDtdParam):void {
                if (p.type === Types.function) {
                    c.functions++;
                } else if (p.type === Types.texture) {
                    c.textures++;
                } else if (p.type === Types.gradient) {
                    c.gradients++;
                } else {
                    c.params++;
                }
            });

            return c;
        }

        private addIdAndFeatures(v:string):void {
            this.ids[v] = v.toLowerCase();

            if (Dtd.functions[v]) {
                this.features[v] = {};
                this.features[v]['function'] = Dtd.functions[v];
                this.features[v].input = {};
                this.features[v].input['function'] = this.countParams(Dtd.functions[v].params);
            }

            if (Dtd.textures[v]) {
                this.features[v] = this.features[v] || {};
                this.features[v].texture = Dtd.textures[v];
                this.features[v].input = this.features[v].input || {};
                this.features[v].input.texture = this.countParams(Dtd.textures[v].params);
            }

            this.features[v].is3d = (this.features[v].texture || this.features[v].function).is3d;
            this.features[v].role = Roles[(this.features[v].texture || this.features[v].function).role];
            this.features[v].kind = Kinds[(this.features[v].texture || this.features[v].function).kind];
        }
    }
}
