module tx {
    'use strict';

    export class Random {
        private static IA:number = 16807;
        private static IM:number = 2147483647;
        private static AM:number = (1.0 / Random.IM);
        private static IQ:number = 127773;
        private static IR:number = 2836;
        private static NTAB:number = 32;
        private static NDIV:number = (1 + (Random.IM - 1) / Random.NTAB);
        private static EPS:number = 1.2e-7;
        private static RNMX:number = (1.0 - Random.EPS);

        private iy:number = 0;
        private iv:number[] = [];
        private idum:number = 0;
        private cached:boolean = false;
        private cachevalue:number;

        constructor(seed:number = 0) {
            this.Seed(seed);
        }

        Seed(seed:number):void {
            var j:number;
            var k:number;

            this.idum = seed;
            if (this.idum < 1) {
                this.idum = 1;
            }

            for (j = Random.NTAB + 7; j >= 0; j--) {
                k = Math.floor(this.idum / Random.IQ);

                this.idum = Math.floor(Random.IA * (this.idum - Math.floor(k * Random.IQ)) - Math.floor(Random.IR * k));

                if (this.idum < 0) {
                    this.idum += Random.IM;
                }

                if (j < Random.NTAB) {
                    this.iv[j] = this.idum;
                }
            }

            this.iy = this.iv[0];
        }

        Float():number {
            var j:number = 0;
            var k:number = 0;
            var temp:number = 0;

            k = Math.floor(this.idum / Random.IQ);
            this.idum = Math.floor(Random.IA * (this.idum - k * Random.IQ) - Random.IR * k);

            if (this.idum < 0) {
                this.idum += Random.IM;
            }

            j = Math.floor(this.iy / Random.NDIV);
            this.iy = this.iv[j];
            this.iv[j] = this.idum;

            if ((temp = Random.AM * this.iy) > Random.RNMX) {
                return Random.RNMX;
            } else {
                return temp;
            }
        }

        FloatRange(min:number, max:number):number {
            return (max - min) * this.Float() + min;
        }

        Gauss():number {
            if (this.cached === true) {
                this.cached = false;
                return this.cachevalue;
            }

            var rsquare:number = 0.0;
            var factor:number = 0;
            var var1:number = 0;
            var var2:number = 0;

            do {
                var1 = (2.0 * this.Float() - 1.0);
                var2 = (2.0 * this.Float() - 1.0);
                rsquare = var1 * var1 + var2 * var2;
            } while (rsquare >= 1.0 || rsquare === 0.0);

            var val:number = (-2.0 * Math.log(rsquare) / rsquare);

            if (val > 0.0) {
                factor = Math.sqrt(val);
            } else {
                factor = 0.0;
            }

            this.cachevalue = var2 * factor;
            this.cached = true;

            return (var1 * factor);
        }
    }
}
