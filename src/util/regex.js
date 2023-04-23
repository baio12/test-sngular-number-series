export class NumberRegex {
    constructor (value) {
        this.value = value
    }

    validateRegex() {
        return /^\d{1}$/.test(this.value);
    }
}