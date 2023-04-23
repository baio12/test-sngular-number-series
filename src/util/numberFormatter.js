export class TransformNumber {
    constructor (number) {
        this.number = number
    }

    fixedNumber() {
        const numberFormmated = new Intl.NumberFormat('es-MX', { style: 'decimal', notation: 'standard', maximumFractionDigits: 4 }).format(this.number);
        return Number(numberFormmated)
    }
}