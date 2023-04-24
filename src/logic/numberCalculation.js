import { TransformNumber } from "../util/numberFormatter";

export class NumberCalculation {
    constructor (number) {
        this.number = number;
    }

    get data() {
        return {
            series: {
                prime: this.calcPrime(),
                triangular: this.calcTriangular(),
                fibonacci: this.calcFibonacci(),
            },
            result: new TransformNumber(this.calcResult()).fixedNumber()
        }
    }

    calcResult () {
        return ((this.calcPrime() + this.calcTriangular()) / this.calcFibonacci());
    }

    calcPrime() {
        //Formula is prime while n > 1 && n % n-i !== 0
        const n = this.number;
        let isPrime = n > 1;
        for (let i = 2; i < n; i++) {
            if(n % i === 0){
                isPrime = false
            }
        }
        return isPrime ? (3 * n) : 0
    }

    calcTriangular() {
        //Formula T(n) = n * (n+1) / 2
        const n = this.number - 1;
        return ( (n * (n + 1) / 2 ) || 0);
    }

    calcFibonacci () {
        // formula F(n) = F(n-2)+F(n-1) 
        const n = this.number + 2;
        let prevValue = 0, actualValue = 1, result;
        for (let i = 2; i <= n; i++) {
            result = prevValue + actualValue;
            prevValue = actualValue;
            actualValue = result;
        }
        return result * 2
    }
}