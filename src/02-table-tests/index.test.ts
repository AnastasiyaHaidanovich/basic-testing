// Uncomment the code below and write your tests
 import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 1, b: 2, action: Action.Subtract, expected: -1 },
    { a: 2, b: 2, action: Action.Subtract, expected: 0 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },
    { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
    { a: 2, b: 2, action: Action.Divide, expected: 1 },
    { a: 10, b: 2, action: Action.Divide, expected: 5 },
    { a: 1, b: 2, action: Action.Multiply, expected: 2 },
    { a: 2, b: 2, action: Action.Multiply, expected: 4 },
    { a: 3, b: 0, action: Action.Multiply, expected: 0 },
    { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
    { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
    { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
]; 
describe.each<{a:number, b:number, action:Action, expected:number}>(testCases)('.add(%d, %d)', ({a, b, action, expected}) => {
  test(`returns ${expected}`, () => {
    expect(simpleCalculator({a, b, action})).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(simpleCalculator({a, b, action})).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(simpleCalculator({a, b, action})).not.toBeLessThan(expected);
  });

  test(`not to be null`, () => {
    expect(simpleCalculator({a, b, action})).not.toBeNull();
  });
});
