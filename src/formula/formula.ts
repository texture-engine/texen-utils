/// <reference path="formula-types.ts" />
/// <reference path="../gradient/gradient.ts" />
/// <reference path="../common/utils.ts" />

module tx {
    'use strict';

    export class Formula {
        render:{[index:string]:IRender} = {};
        textures:{[index:string]:IFeature} = {};
        functions:{[index:string]:IFeature} = {};
        gradients:{[index:string]:IGradient} = {};

        static fromJson(json:string):Formula {
            return new Formula(JSON.parse(json));
        }

        static basic():Formula {
            return new Formula({});
        }

        constructor(obj:any) {
            this.render = obj.render;
            this.functions = obj.functions;
            this.textures = obj.textures;
            this.gradients = obj.gradients;
        }

        toJson():string {
            return JSON.stringify(this);
        }

        isValid():boolean {
            return true;
        }

        scale():number {
            return this.render[Object.keys(this.render)[0]].scale || 1;
        }

        cloneFeatures():Formula {
            var o:any = {};

            Utils.forEach(this, (v:any, k:string) => {
                o[k] = {};
                Utils.forEach(v, (v:any, n:string) => {
                    o[k][n] = v;
                });
            });

            return new Formula(o);
        }
    }
}
