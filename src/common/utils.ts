/// <reference path="../../typings/lodash/lodash.d.ts" />

module tx {
    'use strict';

    export class Utils {
        static forEach:(array:Array<any>|Object, callback:(value:any, key:any) => void, obj?:any) => Array<any> = _.each;
        static indexOf:(array:Array<any>, value:any) => number = _.indexOf;

        static remove(old:Array<any>):Array<any> {
            if (old) {
                old.splice(0, old.length);
            }

            return old;
        }
    }
}
