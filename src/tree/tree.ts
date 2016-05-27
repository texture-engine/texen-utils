/// <reference path="../formula/formula.ts" />
/// <reference path="../dtd/dtd.ts" />
/// <reference path="tree-item.ts" />
/// <reference path="../common/utils.ts" />
/// <reference path="../dtd/mixmap.ts" />
/// <reference path="partial.ts" />

module tx {
    'use strict';

    export class Tree {
        formula:Formula;
        items:Array<TreeItem> = [];
        partials:Array<Partial> = [];
        private lookup:any = {};

        constructor(formula:Formula) {
            this.formula = formula;
            this.updateTree();
            this.updatePartials();
        }

        addRoot(rootValue:any, rootKey:string):void {
            var rootNode:TreeItem = new TreeItem(rootKey, rootKey, true);
            this.items.push(rootNode);

            if (rootKey !== 'render') {
                rootNode.collapsed = true;
            }

            function addNode(value:IData, key:string):void {
                var node:TreeItem = new TreeItem(rootKey + '~' + key, key);
                node.type = rootKey;
                node.data = value;
                rootNode.children.push(node);
                this.lookup[node.id] = node;
            }

            Utils.forEach(rootValue, addNode, this);
        }


        addChildrenId(id:string, value:TreeItem):void {
            if (this.lookup[id]) {
                this.lookup[id].parents = this.lookup[id].parents || [];

                if (Utils.indexOf(this.lookup[id].parents, value.id) === -1) {
                    this.lookup[id].parents.push(value.id);
                }

                value.children.push(this.lookup[id]);
            }
        }

        getChildren(type:string, family:string):Array<Array<string>> {
            var r:Array<Array<string>> = [];

            Utils.forEach((<any>Dtd)[family], function (value:IDtdFeature, dtdType:string):void {
                if (dtdType === type) {
                    Utils.forEach(
                        value.params,
                        function (propValue:IDtdParam, propKey:string):void {
                            if (propValue.type && (<any>Dtd)[Types[propValue.type] + 's']) {
                                r.push([propKey, Types[propValue.type] + 's']);
                            } else if (propValue.type === Types.mixmap) {
                                r.push([propKey, 'mixmap']);
                            }
                        },
                        this
                    );
                }
            });

            return r;
        }

        updateItem(rootValue:TreeItem):void {
            Utils.forEach(rootValue.children, (value:TreeItem) => {
                var children:Array<Array<string>> = this.getChildren(value.data.type, rootValue.id);

                Utils.forEach(
                    children,
                    function (v:Array<string>):void {
                        if (v[1] === 'mixmap') {
                            var mixed:Array<string> = [];

                            Utils.forEach(value.data[v[0]], function (w:IMapStop):void {
                                if (mixed.indexOf(<string>w[1]) < 0) {
                                    mixed.push(<string>w[1]);
                                }
                            });

                            Utils.forEach(
                                mixed,
                                function (w:string):void {
                                    var id:string = 'textures' + '~' + w;
                                    this.addChildrenId(id, value);
                                },
                                this
                            );
                        } else {
                            var id:string = v[1] + '~' + value.data[v[0]];
                            this.addChildrenId(id, value);
                        }
                    },
                    this
                );
            });
        }

        updateTree():void {
            Utils.remove(this.items);
            Utils.forEach(this.formula, this.addRoot, this);
            Utils.forEach(this.items, this.updateItem, this);
        }

        updatePartialsGradients():void {
            Utils.forEach(
                this.formula.gradients,
                (v:any, k:string) => {
                    var p:Partial = new Partial(Families.gradients, k, v, undefined, v);
                    this.partials.push(p);
                    Utils.forEach(
                        v,
                        (v:any) => {
                            var c:Partial = new Partial(Families.colors, undefined, undefined, v, undefined, v, p);
                            this.partials.push(c);
                        }
                    );
                }
            );
        }

        updatePartialsTextures():void {
            Utils.forEach(
                this.formula.textures,
                (v:any, k:string) => {
                    var f:Formula = this.formula.cloneFeatures();
                    f.render = {partial: {type: Types[Types.texture], scale: f.scale(), source: k}};
                    var p:Partial = new Partial(Families.textures, k, f, v);
                    this.partials.push(p);
                }
            );
        }

        updatePartialsFunctions():void {
            Utils.forEach(
                this.formula.functions,
                (v:any, k:string) => {
                    var f:Formula = this.formula.cloneFeatures();
                    f.render = {_partial: {type: Types[Types.texture], scale: f.scale(), source: '_gray'}};
                    f.textures = {_gray: {type: 'Gray', source: '_normalize', min: 0, max: 1}};
                    f.functions['_normalize'] = <IFeature>{
                        type: 'Normalize',
                        source: k,
                        cmin: -1,
                        cmax: 1,
                        min: -1,
                        max: 1,
                        samples: 1024,
                        steps: 1024,
                    };
                    var p:Partial = new Partial(Families.functions, k, f, v);
                    this.partials.push(p);
                }
            );
        }

        updatePartials():void {
            Utils.remove(this.partials);
            this.updatePartialsGradients();
            this.updatePartialsTextures();
            this.updatePartialsFunctions();
        }

        randomizePart(item:TreeItem):void {
            // TODO
        }

        randomizeChildren(item:TreeItem):void {
            // TODO
        }
    }
}
