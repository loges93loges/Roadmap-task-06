class UberCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }
    calculateFare(distance, time) {
        const Price = this.baseFare + (distance * this.costPerMile) + (time * this.costPerMinute);
        return Price;
    }
}
const uberCalculator1 = new UberCalculator(10, 5, 0.5);
const fare = uberCalculator1.calculateFare(15, 10);


console.log(`Uber Price: $${fare}`);