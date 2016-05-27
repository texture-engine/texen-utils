module tx {
    'use strict';

    export class TreeItem {
        id:string;
        label:string;
        root:boolean;
        collapsed:boolean = true;
        children:Array<TreeItem> = [];
        type:string;
        data:any;

        constructor(id:string, label:string, root:boolean = false) {
            this.id = id;
            this.label = label;
            this.root = root;
        }

        /*
        get singular() {
            var sRx = new RegExp('s$');
            return this.type.replace(sRx, '');
        }
        */
    }
}
