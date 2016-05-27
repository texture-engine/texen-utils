/// <reference path="../dtd/dtd-enums.ts" />
/// <reference path="../dtd/dtd.ts" />

module tx {
    'use strict';

    export class Mutator {
        family:Families;
        id:string;
        property:string;
        type:Types;
        param:IDtdParam;

        static getMutators(tree:Tree):Mutator[] {
            var ret:Mutator[] = [];

            Utils.forEach(tree.partials, function (p:any):void {
                if (p.family === Families.gradients) {
                    return;
                } else if (p.family === Families.colors) {
                    return;
                }

                var dtd:IDtdFeature = <IDtdFeature>(Dtd[<string>Families[p.family]][<string>p.data.type]);

                if (!dtd) {
                    return;
                }

                Utils.forEach(dtd.params, function (v:any, property:string):void {
                    if (LinkTypes.indexOf(v.type) > -1) {
                        return;
                    }

                    var mut:Mutator = new Mutator();

                    mut.family = p.family;
                    mut.id = p.id;
                    mut.property = property;
                    mut.type = v.type;
                    mut.param = v;

                    ret.push(mut);
                });
            });

            return ret;
        }

        static countMutations(mutators:Mutator[], range:number = 3):number {
            var ret:number = 1;

            Utils.forEach(mutators, function (m:Mutator):void {
                if (m.type === Types.bool) {
                    ret *= 2;
                } else if (m.type === Types.enumeration) {
                    ret *= Object.keys(m.param.values).length;
                } else {
                    ret *= range;
                }
            });

            return ret;
        }
    }
}
