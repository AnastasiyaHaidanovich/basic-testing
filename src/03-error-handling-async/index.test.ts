import { throwError, throwCustomError, resolveValue, rejectCustomError, MyAwesomeError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(Promise.resolve(resolveValue(5))).resolves.toBe(5);
    await expect(Promise.resolve(resolveValue('fff'))).resolves.toBe('fff');
    await expect(Promise.resolve(resolveValue([5,'gg']))).resolves.toStrictEqual([5,'gg']);
    await expect(Promise.resolve(resolveValue({a: 5, 'g':'gg'}))).resolves.toStrictEqual({a: 5, 'g': 'gg'});
    await expect(Promise.resolve(resolveValue(null))).resolves.toBe(null);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    function throwCustomError() {
      throwError('Custom error');
    }
    expect(throwCustomError).toThrow('Custom error');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(throwError).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(throwCustomError).toThrow('This is my awesome custom error!');
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError).rejects.toThrow(MyAwesomeError);
  });
});
