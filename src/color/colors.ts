module tx {
    'use strict';

    export class Colors {
        static rgbToHex(r:number, g:number, b:number):string {
            return Colors.toHex(r) + Colors.toHex(g) + Colors.toHex(b);
        }

        static hslToRgb(h:number, s:number, l:number):Array<number> {
            var r:number, g:number, b:number;

            function hue2rgb(p:number, q:number, t:number):number {
                if (t < 0) {
                    t += 1;
                }

                if (t > 1) {
                    t -= 1;
                }

                if (t < 1 / 6) {
                    return p + (q - p) * 6 * t;
                }

                if (t < 1 / 2) {
                    return q;
                }

                if (t < 2 / 3) {
                    return p + (q - p) * (2 / 3 - t) * 6;
                }

                return p;
            }

            if (s === 0) {
                r = g = b = l; // achromatic
            } else {
                var q:number = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p:number = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        }

        static rgbToHsl(r:number, g:number, b:number):Array<number> {
            r /= 255;
            g /= 255;
            b /= 255;

            var max:number = Math.max(r, g, b), min:number = Math.min(r, g, b);
            var h:number, s:number, l:number = (max + min) / 2;

            if (max === min) {
                h = s = 0; // achromatic
            } else {
                var d:number = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                    default:
                        break;
                }
                h /= 6;
            }

            return [h, s, l];
        }

        static HslToHslInteger(h:number, s:number, l:number):Array<number> {
            return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
        }

        static HslIntegerToHsl(h:number, s:number, l:number):Array<number> {
            return [h / 360, s / 100, l / 100];
        }

        static getContrastColor(c:Array<number>):string {
            var h:Array<number> = Colors.rgbToHsl(c[1], c[2], c[3]);

            if (h[2] < 0.4) {
                return '#fff';
            } else {
                return '#000';
            }
        }

        static hexToRgb(h:string):Array<number> {
            return [Colors.hexToR(h), Colors.hexToG(h), Colors.hexToB(h)];
        }

        private static cutHex(h:string):string {
            return (h.charAt(0) === '#') ? h.substring(1, 7) : h;
        }

        private static hexToR(h:string):number {
            return parseInt((Colors.cutHex(h)).substring(0, 2), 16);
        }

        private static hexToG(h:string):number {
            return parseInt((Colors.cutHex(h)).substring(2, 4), 16);
        }

        private static hexToB(h:string):number {
            return parseInt((Colors.cutHex(h)).substring(4, 6), 16);
        }

        private static toHex(n:number):string {
            n = Math.max(0, Math.min(n, 255));
            var h:string = '0123456789ABCDEF';
            return h.charAt((n - n % 16) / 16) + h.charAt(n % 16);
        }
    }
}
