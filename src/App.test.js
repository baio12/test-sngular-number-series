import { NumberCalculation } from "./logic/numberCalculation";

const expectedResults = [
  { number: 0, expectResult: 0 },
  { number: 1, expectResult: 0 },
  { number: 2, expectResult: 1.75 },
  { number: 3, expectResult: 2 },
  { number: 4, expectResult: 0.6 },
  { number: 5, expectResult: 1.5625 },
  { number: 6, expectResult: 0.5769 },
  { number: 7, expectResult: 1 },
  { number: 8, expectResult: 0.4118 },
  { number: 9, expectResult: 0.3273 },
]

test('number series calculations in natural numbers between 0-9', () => {

  expectedResults.forEach(test => {
    const res = new NumberCalculation(test.number);
    expect(res.data.result).toBe(test.expectResult);
  });

});
