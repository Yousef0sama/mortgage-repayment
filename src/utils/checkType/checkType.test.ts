
// imports
import checkType from './checkType';

describe('checkType', () => {

  it('should return true for correct type', () => {
    expect(checkType(123, 'number')).toBe(true);
    expect(checkType('test', 'string')).toBe(true);
    expect(checkType(true, 'boolean')).toBe(true);
    expect(checkType([], 'array')).toBe(true); // special case for array
    expect(checkType(null, 'null')).toBe(true); // special case for null
  });

  it('should return false for incorrect type', () => {
    expect(checkType(123, 'string')).toBe(false);
    expect(checkType('test', 'number')).toBe(false);
    expect(checkType(true, 'object')).toBe(false);
    expect(checkType([], 'string')).toBe(false); // should be false for array when expecting string
    expect(checkType(null, 'number')).toBe(false); // should be false for null when expecting number
  });

  it('should handle unexpected type values', () => {
    expect(checkType(123, 'undefined')).toBe(false);
    expect(checkType('test', 'function')).toBe(false);
  });

});
