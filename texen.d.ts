/// <reference path="typings/lodash/lodash.d.ts" />
/// <reference path="typings/node/node.d.ts" />
declare module tx {
    interface IColorStop extends Array<number> {
    }
    interface IGradient extends Array<IColorStop> {
    }
}
declare module tx {
    interface IData {
        type: string;
        source?: string;
        min?: number;
        max?: number;
    }
    interface IRender extends IData {
        scale: number;
    }
    interface IFeature extends IData {
    }
}
declare module tx {
    class Utils {
        static forEach: (array: Array<any> | Object, callback: (value: any, key: any) => void, obj?: any) => Array<any>;
        static indexOf: (array: Array<any>, value: any) => number;
        static remove(old: Array<any>): Array<any>;
    }
}
declare module tx {
    class Formula {
        render: {
            [index: string]: IRender;
        };
        textures: {
            [index: string]: IFeature;
        };
        functions: {
            [index: string]: IFeature;
        };
        gradients: {
            [index: string]: IGradient;
        };
        static fromJson(json: string): Formula;
        static basic(): Formula;
        constructor(obj: any);
        toJson(): string;
        isValid(): boolean;
        scale(): number;
        cloneFeatures(): Formula;
    }
}
declare module tx {
    class Colors {
        static rgbToHex(r: number, g: number, b: number): string;
        static hslToRgb(h: number, s: number, l: number): Array<number>;
        static rgbToHsl(r: number, g: number, b: number): Array<number>;
        static HslToHslInteger(h: number, s: number, l: number): Array<number>;
        static HslIntegerToHsl(h: number, s: number, l: number): Array<number>;
        static getContrastColor(c: Array<number>): string;
        static hexToRgb(h: string): Array<number>;
        private static cutHex(h);
        private static hexToR(h);
        private static hexToG(h);
        private static hexToB(h);
        private static toHex(n);
    }
}
declare module tx {
    enum Roles {
        generator = 0,
        modifier = 1,
        colorizer = 2,
        combiner = 3,
        special = 4,
    }
    enum Kinds {
        pattern = 0,
        renderer = 1,
        math = 2,
        transform = 3,
        equalizer = 4,
        noise = 5,
        fractal = 6,
        warp = 7,
        blend = 8,
        heightmap = 9,
        calculator = 10,
        cache = 11,
        composer = 12,
        colorscale = 13,
        filter = 14,
        constant = 15,
        colorizer = 16,
    }
    enum Types {
        bool = 0,
        int = 1,
        float = 2,
        enumeration = 3,
        function = 4,
        texture = 5,
        gradient = 6,
        mixmap = 7,
        formula = 8,
    }
    var LinkTypes: Array<Types>;
    enum Families {
        functions = 0,
        textures = 1,
        gradients = 2,
        colors = 3,
        renders = 4,
    }
}
declare module tx {
    interface IDtd {
        render: IDtdRenders;
        textures: IDtdFeatures;
        functions: IDtdFeatures;
        gradients: IGradients;
        [key: string]: IDtdRenders | IGradients | IDtdFeatures;
    }
    interface IDtdCommon {
        name?: string;
        family?: string;
    }
    interface IDtdRender extends IDtdCommon {
        params: IDtdParams;
    }
    interface IDtdFeature extends IDtdCommon {
        role: Roles;
        kind: Kinds;
        is3d: boolean;
        scale?: number;
        invert?: boolean;
        description?: string;
        preview?: boolean;
        params: IDtdParams;
    }
    interface IDtdParams {
        [index: string]: IDtdParam;
    }
    interface IDtdRenders {
        [index: string]: IDtdRender;
    }
    interface IDtdFeatures {
        [index: string]: IDtdFeature;
    }
    interface IGradients {
        [index: string]: IGradient;
    }
    interface IDtdParam {
        type: Types;
        min?: number;
        max?: number;
        value?: number | boolean | any[] | string;
        values?: any;
        optional?: boolean;
    }
}
declare module tx {
    var Dtd: IDtd;
}
declare module tx {
    class DtdOverview {
        private static _overview;
        keys: Array<string>;
        features: {
            [index: string]: any;
        };
        ids: {
            [index: string]: string;
        };
        static getOverview(): DtdOverview;
        constructor();
        private addKeys(obj);
        private countParams(params);
        private addIdAndFeatures(v);
    }
}
declare module tx {
    class DtdUtils {
        static filter(role?: Roles, families?: IDtdFeatures[], preview?: boolean): IDtdFeature[];
        static params(feature: IDtdFeature): IDtdParams;
        static enums(params: IDtdParams): IDtdParams;
    }
}
declare module tx {
    interface IMapStop extends Array<number | string> {
    }
    interface IMixmap extends Array<IMapStop> {
    }
}
declare module tx {
    class Genetic extends Formula {
        constructor(obj: Formula);
    }
}
declare module tx {
    class Mutator {
        family: Families;
        id: string;
        property: string;
        type: Types;
        param: IDtdParam;
        static getMutators(tree: Tree): Mutator[];
        static countMutations(mutators: Mutator[], range?: number): number;
    }
}
declare module tx {
    class Generator {
        formulas: Formula[];
        constructor();
    }
}
declare module tx {
    class Random {
        private static IA;
        private static IM;
        private static AM;
        private static IQ;
        private static IR;
        private static NTAB;
        private static NDIV;
        private static EPS;
        private static RNMX;
        private iy;
        private iv;
        private idum;
        private cached;
        private cachevalue;
        constructor(seed?: number);
        Seed(seed: number): void;
        Float(): number;
        FloatRange(min: number, max: number): number;
        Gauss(): number;
    }
}
declare module tx {
    class Partial {
        family: Families;
        id: string;
        formula: Formula;
        gradient: IGradient;
        color: IColorStop;
        parent: Partial;
        data: IData;
        constructor(family: Families, id: string, formula: Formula, data?: IData, gradient?: IGradient, color?: IColorStop, parent?: Partial);
    }
}
declare module tx {
    class TreeItem {
        id: string;
        label: string;
        root: boolean;
        collapsed: boolean;
        children: Array<TreeItem>;
        type: string;
        data: any;
        constructor(id: string, label: string, root?: boolean);
    }
}
declare module tx {
    class Tree {
        formula: Formula;
        items: Array<TreeItem>;
        partials: Array<Partial>;
        private lookup;
        constructor(formula: Formula);
        addRoot(rootValue: any, rootKey: string): void;
        addChildrenId(id: string, value: TreeItem): void;
        getChildren(type: string, family: string): Array<Array<string>>;
        updateItem(rootValue: TreeItem): void;
        updateTree(): void;
        updatePartialsGradients(): void;
        updatePartialsTextures(): void;
        updatePartialsFunctions(): void;
        updatePartials(): void;
        randomizePart(item: TreeItem): void;
        randomizeChildren(item: TreeItem): void;
    }
}
