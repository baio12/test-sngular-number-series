import { NumberCalculation } from "./logic/numberCalculation";

const expectedResults = [
  { number: 0, expectResult: 0 },
  { number: 1, expectResult: 0 },
  { number: 2, expectResult: 1.1667 },
  { number: 3, expectResult: 1.2 },
  { number: 4, expectResult: 0.375 },
  { number: 5, expectResult: 0.9615 },
  { number: 6, expectResult: 0.3571 },
  { number: 7, expectResult: 0.6176 },
  { number: 8, expectResult: 0.2545 },
  { number: 9, expectResult: 0.2022 },
]

test('number series calculations in natural numbers between 0-9', () => {

  expectedResults.forEach(test => {
    const res = new NumberCalculation(test.number);
    expect(res.data.result).toBe(test.expectResult);
  });

});
