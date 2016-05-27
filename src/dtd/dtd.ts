/// <reference path="dtd-types.ts" />
/// <reference path="dtd-enums.ts" />
/// <reference path="../common/utils.ts" />

module tx {
    'use strict';

    export var Dtd:IDtd = {
        render: {
            Texture: {
                params: {
                    source: {
                        type: Types.texture
                    },
                    bump: {
                        type: Types.texture,
                        optional: true
                    },
                    bumpScale: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 10
                    },
                    scale: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    fill: {
                        type: Types.bool,
                        value: true
                    }
                }
            },
            Box: {
                params: {
                    source: {
                        type: Types.texture
                    },
                    scale: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    sphere: {
                        type: Types.bool,
                        value: true
                    }
                }
            },
            Sphere: {
                params: {
                    source: {
                        type: Types.texture
                    },
                    bump: {
                        type: Types.texture,
                        optional: true
                    },
                    bumpScale: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 10
                    },
                    scale: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    }
                }
            }
        },
        textures: {
            Constant: {
                role: Roles.generator,
                kind: Kinds.constant,
                is3d: true,
                params: {
                    r: {
                        type: Types.int,
                        min: 0,
                        max: 255,
                        value: 0
                    },
                    g: {
                        type: Types.int,
                        min: 0,
                        max: 255,
                        value: 0
                    },
                    b: {
                        type: Types.int,
                        min: 0,
                        max: 255,
                        value: 0
                    }
                }
            },
            BlendAlpha: {
                role: Roles.combiner,
                kind: Kinds.blend,
                is3d: true,
                params: {
                    source: {
                        type: Types.texture
                    },
                    blend: {
                        type: Types.texture
                    },
                    alpha: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.5
                    }
                }
            },
            BlendAlphaFunction: {
                role: Roles.combiner,
                kind: Kinds.blend,
                is3d: true,
                params: {
                    source: {
                        type: Types.texture
                    },
                    blend: {
                        type: Types.texture
                    },
                    opacity: {
                        type: Types.function
                    }
                }
            },
            Blend: {
                role: Roles.combiner,
                kind: Kinds.blend,
                is3d: true,
                params: {
                    source: {
                        type: Types.texture
                    },
                    blend: {
                        type: Types.texture
                    },
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Normal: 0,
                            Lighten: 1,
                            Darken: 2,
                            Multiply: 3,
                            Average: 4,
                            Add: 5,
                            Subtract: 6,
                            Difference: 7,
                            Negation: 8,
                            Screen: 9,
                            Exclusion: 10,
                            Overlay: 11,
                            SoftLight: 12,
                            HardLight: 13,
                            ColorDodge: 14,
                            ColorBurn: 15,
                            LinearDodge: 16,
                            LinearBurn: 17,
                            LinearLight: 18,
                            VividLight: 19,
                            PinLight: 20,
                            HardMix: 21,
                            Reflect: 22,
                            Glow: 23,
                            Phoenix: 24,
                            Hue: 25,
                            Saturation: 26,
                            Color: 27,
                            Luminosity: 28
                        }
                    }
                }
            },
            Gradient: {
                role: Roles.colorizer,
                kind: Kinds.colorizer,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    gradient: {
                        type: Types.gradient
                    },
                    min: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    max: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invert: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            Gray: {
                role: Roles.colorizer,
                kind: Kinds.colorizer,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    min: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    max: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invert: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            HSL: {
                role: Roles.combiner,
                kind: Kinds.composer,
                is3d: true,
                params: {
                    sourceH: {
                        type: Types.function
                    },
                    sourceS: {
                        type: Types.function
                    },
                    sourceL: {
                        type: Types.function
                    },
                    minH: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    maxH: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invertH: {
                        type: Types.bool,
                        value: false
                    },
                    minS: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    maxS: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invertS: {
                        type: Types.bool,
                        value: false
                    },
                    minL: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    maxL: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invertL: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            RGB: {
                role: Roles.combiner,
                kind: Kinds.composer,
                is3d: true,
                params: {
                    sourceR: {
                        type: Types.function
                    },
                    sourceG: {
                        type: Types.function
                    },
                    sourceB: {
                        type: Types.function
                    },
                    minR: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    maxR: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invertR: {
                        type: Types.bool,
                        value: false
                    },
                    minG: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    maxG: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invertG: {
                        type: Types.bool,
                        value: false
                    },
                    minB: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    maxB: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invertB: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            RgbBox: {
                role: Roles.generator,
                kind: Kinds.colorscale,
                is3d: true,
                params: {}
            },
            HslBox: {
                role: Roles.generator,
                kind: Kinds.colorscale,
                is3d: true,
                params: {}
            },
            MultiMix: {
                role: Roles.combiner,
                kind: Kinds.pattern,
                is3d: true,
                preview: false,
                params: {
                    source: {
                        type: Types.function
                    },
                    min: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    max: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invert: {
                        type: Types.bool,
                        value: false
                    },
                    mixmap: {
                        type: Types.mixmap,
                        value: []
                    }
                }
            },
            Shadow: {
                role: Roles.modifier,
                kind: Kinds.renderer,
                is3d: false,
                params: {
                    source: {
                        type: Types.function
                    },
                    mingray: {
                        type: Types.int,
                        min: 0,
                        max: 255,
                        value: 0
                    },
                    maxgray: {
                        type: Types.int,
                        min: 0,
                        max: 255,
                        value: 255
                    },
                    lightX: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    lightY: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    lightZ: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    accuracy: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    size: {
                        type: Types.int,
                        min: 16,
                        max: 16384,
                        value: 512
                    }
                }
            },
            ShadingFlat: {
                role: Roles.modifier,
                kind: Kinds.renderer,
                is3d: false,
                params: {
                    source: {
                        type: Types.function
                    },
                    mingray: {
                        type: Types.int,
                        min: 0,
                        max: 255,
                        value: 0
                    },
                    maxgray: {
                        type: Types.int,
                        min: 0,
                        max: 255,
                        value: 255
                    },
                    lightX: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    lightY: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    lightZ: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    size: {
                        type: Types.int,
                        min: 16,
                        max: 16384,
                        value: 512
                    }
                }
            },
            SkyBody: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: true,
                params: {
                    gradient: {
                        type: Types.gradient
                    }
                }
            },
            LegacySky: {
                role: Roles.combiner,
                kind: Kinds.pattern,
                is3d: true,
                params: {
                    skybody: {
                        type: Types.texture
                    },
                    sunglow: {
                        type: Types.function
                    },
                    sunflare: {
                        type: Types.function
                    },
                    clouds: {
                        type: Types.function
                    }
                }
            }
        },
        functions: {
            Constant: {
                role: Roles.generator,
                kind: Kinds.math,
                is3d: true,
                preview: false,
                params: {
                    value: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    }
                }
            },
            Abs: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    }
                }
            },
            Add: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    value: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    }
                }
            },
            Rotate: {
                role: Roles.modifier,
                kind: Kinds.transform,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    x: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0
                    },
                    y: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0
                    },
                    z: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0.25
                    }
                }
            },
            Skew: {
                role: Roles.modifier,
                kind: Kinds.transform,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    x: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0.25
                    },
                    y: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0.25
                    },
                    z: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0.25
                    }
                }
            },
            Steps: {
                role: Roles.modifier,
                kind: Kinds.equalizer,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    from: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    to: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    steps: {
                        type: Types.int,
                        min: 1,
                        max: 1000,
                        value: 8
                    },
                    cut: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            Noise: {
                role: Roles.generator,
                kind: Kinds.noise,
                is3d: true,
                params: {
                    seed: {
                        type: Types.int,
                        min: 0,
                        max: 65535,
                        value: 0
                    }
                }
            },
            ImprovedNoise: {
                role: Roles.generator,
                kind: Kinds.noise,
                is3d: true,
                params: {
                    seed: {
                        type: Types.int,
                        min: 0,
                        max: 65535,
                        value: 0
                    }
                }
            },
            Dots: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: true,
                params: {
                    low: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.5
                    },
                    high: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 1
                    },
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Dots: 0,
                            Squares: 1
                        },
                        value: 0
                    }
                }
            },
            Cubist: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: true,
                params: {
                    low: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: -2
                    },
                    high: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    }
                }
            },
            Stars: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: false,
                params: {
                    threshold: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.5
                    },
                    variation: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.5
                    },
                    radius: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.5
                    }
                }
            },
            VoronoiLines: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: false,
                params: {
                    low: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.05
                    },
                    high: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.1
                    }
                }
            },
            SmoothStep: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    low: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.25
                    },
                    high: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.75
                    }
                }
            },
            Voronoizer: {
                role: Roles.modifier,
                kind: Kinds.pattern,
                is3d: false,
                params: {
                    source: {
                        type: Types.function
                    },
                    secondPass: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            Mandelbrot: {
                role: Roles.generator,
                kind: Kinds.fractal,
                is3d: false,
                params: {
                    max: {
                        type: Types.float,
                        min: 0,
                        max: 2048,
                        value: 4
                    },
                    iterations: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 128
                    },
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Normal: 0,
                            Crop: 1,
                            Distance: 2
                        }
                    }
                }
            },
            Julia: {
                role: Roles.generator,
                kind: Kinds.fractal,
                is3d: false,
                params: {
                    max: {
                        type: Types.float,
                        min: 0,
                        max: 2048,
                        value: 4
                    },
                    iterations: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 256
                    },
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Normal: 0,
                            Crop: 1,
                            Distance: 2
                        }
                    },
                    x: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    y: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    }
                }
            },
            Tiles: {
                role: Roles.modifier,
                kind: Kinds.transform,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    x: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 3
                    },
                    y: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 3
                    },
                    z: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 3
                    },
                    mirrorX: {
                        type: Types.bool,
                        value: false
                    },
                    mirrorY: {
                        type: Types.bool,
                        value: false
                    },
                    mirrorZ: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            Misc: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: true,
                scale: 5,
                params: {
                    misc: {
                        type: Types.enumeration,
                        values: {
                            Sine: 0,
                            SineWaves: 1,
                            SineBoard: 2,
                            Mosaic: 3,
                            RampX: 4,
                            RampY: 5,
                            RampZ: 6,
                            Checker: 7,
                            ValueX: 8,
                            ValueY: 9,
                            ValueZ: 10,
                            RadiusXY: 11,
                            RadiusXYZ: 12,
                            AngleXY: 13
                        }
                    }
                }
            },
            Venus: {
                role: Roles.modifier,
                kind: Kinds.warp,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    offset: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.5
                    },
                    twist: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.1
                    }
                }
            },
            Turbulence: {
                role: Roles.modifier,
                kind: Kinds.warp,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    H: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.75
                    },
                    lacunarity: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 2
                    },
                    octaves: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 7
                    }
                }
            },
            FBm: {
                role: Roles.modifier,
                kind: Kinds.fractal,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    H: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.75
                    },
                    lacunarity: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 2
                    },
                    octaves: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 7
                    }
                }
            },
            MultiFractal: {
                role: Roles.modifier,
                kind: Kinds.fractal,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    H: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.75
                    },
                    lacunarity: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 2
                    },
                    octaves: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 7
                    }
                }
            },
            HeteroTerrain: {
                role: Roles.modifier,
                kind: Kinds.fractal,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    H: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.75
                    },
                    lacunarity: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 2
                    },
                    octaves: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 7
                    },
                    offset: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.25
                    }
                }
            },
            HybridMultiFractal: {
                role: Roles.modifier,
                kind: Kinds.fractal,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    H: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.75
                    },
                    lacunarity: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 2
                    },
                    octaves: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 7
                    },
                    offset: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.25
                    },
                    gain: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 10.25
                    }
                }
            },
            RidgedMultiFractal: {
                role: Roles.modifier,
                kind: Kinds.fractal,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    H: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.5
                    },
                    lacunarity: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 2.5
                    },
                    octaves: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 7
                    },
                    offset: {
                        type: Types.float,
                        min: 0,
                        max: 10,
                        value: 0.5
                    },
                    threshold: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 2.5
                    }
                }
            },
            VLNoise: {
                role: Roles.modifier,
                kind: Kinds.warp,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    threshold: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0.3
                    }
                }
            },
            Scale: {
                role: Roles.modifier,
                kind: Kinds.transform,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    x: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    y: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    z: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    }
                }
            },
            Translate: {
                role: Roles.modifier,
                kind: Kinds.transform,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    x: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    y: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    z: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    }
                }
            },
            Seamless: {
                role: Roles.modifier,
                kind: Kinds.transform,
                is3d: false,
                params: {
                    source: {
                        type: Types.function
                    }
                }
            },
            Blend: {
                role: Roles.combiner,
                kind: Kinds.blend,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    blend: {
                        type: Types.function
                    },
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Normal: 0,
                            Lighten: 1,
                            Darken: 2,
                            Multiply: 3,
                            Average: 4,
                            Add: 5,
                            Subtract: 6,
                            Difference: 7,
                            Negation: 8,
                            Screen: 9,
                            Exclusion: 10,
                            Overlay: 11,
                            SoftLight: 12,
                            HardLight: 13,
                            ColorDodge: 14,
                            ColorBurn: 15,
                            LinearDodge: 16,
                            LinearBurn: 17,
                            LinearLight: 18,
                            VividLight: 19,
                            PinLight: 20,
                            HardMix: 21,
                            Reflect: 22,
                            Glow: 23,
                            Phoenix: 24
                        }
                    }
                }
            },
            BlendAlpha: {
                role: Roles.combiner,
                kind: Kinds.blend,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    blend: {
                        type: Types.function
                    },
                    alpha: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.5
                    }
                }
            },
            BlendAlphaFunction: {
                role: Roles.combiner,
                kind: Kinds.blend,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    blend: {
                        type: Types.function
                    },
                    opacity: {
                        type: Types.function
                    },
                    alpha: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.5
                    }
                }
            },
            Adjust: {
                role: Roles.modifier,
                kind: Kinds.equalizer,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    inMin: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: -1
                    },
                    inMax: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    outMin: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    outMax: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invert: {
                        type: Types.bool,
                        value: false
                    },
                    noClamp: {
                        type: Types.bool,
                        value: false
                    },
                    noAuto: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            Equalize: {
                role: Roles.modifier,
                kind: Kinds.equalizer,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    samplesA: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 256
                    },
                    samplesB: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 128
                    },
                    samplesC: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 128
                    },
                    range: {
                        type: Types.float,
                        min: 0,
                        max: 100,
                        value: 8
                    },
                    invert: {
                        type: Types.bool,
                        value: false
                    },
                    outMin: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    outMax: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    steps: {
                        type: Types.int,
                        min: 2,
                        max: 1024,
                        value: 512
                    }
                }
            },
            Normalize: {
                role: Roles.modifier,
                kind: Kinds.equalizer,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    samplesA: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 256
                    },
                    samplesB: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 128
                    },
                    samplesC: {
                        type: Types.int,
                        min: 0,
                        max: 2048,
                        value: 128
                    },
                    range: {
                        type: Types.float,
                        min: 0,
                        max: 100,
                        value: 8
                    },
                    outMin: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    outMax: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    invert: {
                        type: Types.bool,
                        value: false
                    },
                    noClamp: {
                        type: Types.bool,
                        value: false
                    },
                    noAuto: {
                        type: Types.bool,
                        value: false
                    }
                }
            },
            HeightHill: {
                role: Roles.generator,
                kind: Kinds.heightmap,
                is3d: false,
                description: 'http://www.stuffwithstuff.com/robot-frog/is3d/hills/hill.html',
                scale: 1,
                params: {
                    mode: {
                        type: Types.enumeration,
                        values: {
                            None: 0,
                            Square: 1,
                            BigCircle: 2,
                            SmallCircle: 3
                        }
                    },
                    seed: {
                        type: Types.int,
                        min: 0,
                        max: 65535,
                        value: 3
                    },
                    iterations: {
                        type: Types.int,
                        min: 1,
                        max: 65535,
                        value: 10000
                    },
                    hillmin: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0.02
                    },
                    hillmax: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0.08
                    },
                    size: {
                        type: Types.int,
                        min: 15,
                        max: 16384,
                        value: 256
                    }
                }
            },
            HeightFault: {
                role: Roles.generator,
                kind: Kinds.heightmap,
                is3d: false,
                description: 'http://www.lighthouseis3d.com/opengl/terrain/index.php3?fault',
                scale: 1,
                params: {
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Step: 0,
                            StepCurve: 1,
                            Curve: 2,
                            Wave: 3
                        }
                    },
                    seed: {
                        type: Types.int,
                        min: 0,
                        max: 65535,
                        value: 0
                    },
                    size: {
                        type: Types.int,
                        min: 0,
                        max: 65535,
                        value: 256
                    },
                    iterations: {
                        type: Types.int,
                        min: 1,
                        max: 65535,
                        value: 256
                    },
                    dispmin: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    dispmax: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    wavemin: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    },
                    wavemax: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    }
                }
            },
            HeightFractal: {
                role: Roles.generator,
                kind: Kinds.heightmap,
                is3d: false,
                scale: 1,
                params: {
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Linear: 0,
                            Gauss: 1
                        }
                    },
                    seed: {
                        type: Types.int,
                        min: 0,
                        max: 65535,
                        value: 0
                    },
                    iterations: {
                        type: Types.int,
                        min: 2,
                        max: 15,
                        value: 8
                    },
                    hurst: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0.5
                    },
                    scale: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    convexity: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 0
                    }
                }
            },
            SunFlare: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: true,
                params: {
                    width: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.1
                    },
                    n: {
                        type: Types.int,
                        min: 2,
                        max: 12,
                        value: 6
                    },
                    k1: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.5
                    },
                    k2: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1.5
                    },
                    positionX: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    positionY: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.5
                    },
                    positionZ: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: -1
                    },
                    directionX: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: -0.5
                    },
                    directionY: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0
                    },
                    directionZ: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.125
                    }
                }
            },
            SunGlow: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: true,
                params: {
                    k1: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.5
                    },
                    k2: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1.5
                    },
                    positionX: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 1
                    },
                    positionY: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: 0.5
                    },
                    positionZ: {
                        type: Types.float,
                        min: -10,
                        max: 10,
                        value: -1
                    }
                }
            },
            Calculator: {
                role: Roles.modifier,
                kind: Kinds.calculator,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    formula: {
                        type: Types.formula,
                        value: 'abs(val)'
                    }
                }
            },
            Warp: {
                role: Roles.combiner,
                kind: Kinds.warp,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    warp: {
                        type: Types.function
                    },
                    intensity: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 1
                    },
                    x: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 10
                    },
                    y: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 10
                    }
                }
            },
            Cache: {
                role: Roles.special,
                kind: Kinds.cache,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    size: {
                        type: Types.int,
                        min: 1,
                        max: 1000000,
                        value: 1
                    }
                }
            },
            Filter: {
                role: Roles.modifier,
                kind: Kinds.filter,
                is3d: false,
                params: {
                    source: {
                        type: Types.function
                    },
                    filter: {
                        type: Types.enumeration,
                        values: {
                            Identity: 0,
                            Average: 1,
                            Blur: 2,
                            GaussianBlur: 3,
                            MotionBlur: 4,
                            CrossBlur: 5,
                            Edges1: 6,
                            Edges2: 7,
                            Sharpen: 8,
                            HighPass: 9,
                            LowPass: 10,
                            Emboss1: 11,
                            Emboss2: 12
                        }
                    },
                    x: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0.25
                    },
                    y: {
                        type: Types.float,
                        min: -1,
                        max: 1,
                        value: 0.25
                    }
                }
            },
            Voronoi: {
                role: Roles.generator,
                kind: Kinds.pattern,
                is3d: true,
                invert: true,
                params: {
                    seed: {
                        type: Types.int,
                        min: 0,
                        max: 65535,
                        value: 0
                    },
                    voronoi: {
                        type: Types.enumeration,
                        values: {
                            First: 0,
                            Second: 1,
                            Third: 2,
                            Fourth: 3,
                            Difference21: 4,
                            Difference32: 5,
                            Crackle: 6
                        }
                    },
                    distance: {
                        type: Types.enumeration,
                        values: {
                            Length: 0,
                            Length2: 1,
                            Manhattan: 2,
                            Chebychev: 4,
                            Quadratic: 5,
                            Minkowski4: 6,
                            Minkowski5: 7,
                            Sine: 8
                        }
                    }
                }
            },
            BiasGain: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    value: {
                        type: Types.float,
                        min: 0,
                        max: 1,
                        value: 0.25
                    },
                    mode: {
                        type: Types.enumeration,
                        values: {
                            Bias: 0,
                            Gain: 1
                        }
                    }
                }
            },
            Exp: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    value: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 2
                    }
                }
            },
            Pow: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    value: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 2
                    }
                }
            },
            Multiply: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    },
                    value: {
                        type: Types.float,
                        min: -100,
                        max: 100,
                        value: 2
                    }
                }
            },
            Tan: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    }
                }
            },
            Sin: {
                role: Roles.modifier,
                kind: Kinds.math,
                is3d: true,
                params: {
                    source: {
                        type: Types.function
                    }
                }
            }
        },
        gradients: {}
    };

    Utils.forEach(Dtd, function (v:any, family:string):void {
        Utils.forEach(v, function (v:any, name:string):void {
            v.name = name;
            v.family = family;
        });
    });
}
