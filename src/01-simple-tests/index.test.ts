// Uncomment the code below and write your tests
 import { simpleCalculator, Action } from './index';
 import {expect, test} from '@jest/globals';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({a:1, b:3, action: Action.Add})).toBe(4);
    expect(simpleCalculator({a:5, b:17, action:'+'})).not.toBe('22');
    expect(simpleCalculator({a:1, b:201, action:'+'})).not.toBeNull();
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({a:1, b:3, action: Action.Subtract})).toBe(-2);
    expect(simpleCalculator({a:5, b:17, action:'-'})).not.toBe('-12');
    expect(simpleCalculator({a:1, b:201, action:'-'})).not.toBeNull();
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({a:7, b:3, action: Action.Multiply})).toBe(21);
    expect(simpleCalculator({a:5, b:7, action:'*'})).not.toBe('35');
    expect(simpleCalculator({a:1, b:201, action:'*'})).not.toBeNull();
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({a:1, b:4, action: Action.Divide})).toBe(0.25);
    expect(simpleCalculator({a:16, b:17, action:'/'})).not.toBe('0.22');
    expect(simpleCalculator({a:1, b:201, action:'/'})).not.toBeNull();
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({a:2, b:3, action: Action.Exponentiate})).toBe(8);
    expect(simpleCalculator({a:16, b:17, action:'^'})).not.toBe('45353');
    expect(simpleCalculator({a:1, b:201, action:'^'})).not.toBeNull();
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({a:2, b:3, action:'j'})).toBeNull();
    expect(simpleCalculator({a:2, b:3, action:'=-'})).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({a:'2', b:3, action:'+'})).toBeNull();
    expect(simpleCalculator({a:2, b: [1,2,3], action:'-'})).toBeNull();
  });
});
