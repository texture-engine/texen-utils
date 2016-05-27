/// <reference path="dtd.ts" />

module tx {
    'use strict';

    export class DtdUtils {
        public static filter(role:Roles = Roles.generator,
                             families:IDtdFeatures[] = [Dtd.textures, Dtd.functions],
                             preview:boolean = true):IDtdFeature[] {
            var results:IDtdFeature[] = [];

            _.each(families, function (family:IDtdFeatures):void {
                _.each(family, function (feature:IDtdFeature):void {
                    var vp:boolean = (feature.preview !== undefined) ? feature.preview : true;

                    if (((preview !== null) ? preview === vp : true) &&
                        (feature.role === role)) {
                        results.push(feature);
                    }
                });
            });

            return results;
        }

        public static params(feature:IDtdFeature):IDtdParams {
            return feature.params || {};
        }

        public static enums(params:IDtdParams):IDtdParams {
            var results:IDtdParams = {};

            _.each(params, function (v:IDtdParam, k:string):void {
                if (v.type === Types.enumeration) {
                    results[k] = v;
                }
            });

            return results;
        }
    }
}
