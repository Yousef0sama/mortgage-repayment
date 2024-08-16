import formatNumberWithCommas from './numberFormat';

describe('formatNumberWithCommas', () => {
  it('should format numbers with commas', () => {
    expect(formatNumberWithCommas(1000)).toBe('1,000');
    expect(formatNumberWithCommas(1234567)).toBe('1,234,567');
    expect(formatNumberWithCommas(1234567890)).toBe('1,234,567,890');
    expect(formatNumberWithCommas(0)).toBe('0');
    expect(formatNumberWithCommas(123.45)).toBe('123.45'); // Ensure decimals are not changed
  });

  it('should handle negative numbers', () => {
    expect(formatNumberWithCommas(-1000)).toBe('-1,000');
    expect(formatNumberWithCommas(-1234567)).toBe('-1,234,567');
  });

  it('should handle large numbers', () => {
    expect(formatNumberWithCommas(1234567890123)).toBe('1,234,567,890,123');
  });
});
