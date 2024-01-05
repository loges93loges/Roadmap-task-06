class UberCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }
    calculatefare(distance, time) {
        const fare = this.baseFare + (distance * this.costPerMile) + (time * this.costPerMinute);
        return fare;
    }
}
const uberCalculator1 = new UberCalculator(10, 5, 0.5);
const fare = uberCalculator1.calculatefare(15, 10);


console.log(`Uber Price: $${fare}`);
