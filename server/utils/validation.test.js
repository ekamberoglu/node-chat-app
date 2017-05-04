const expect = require('expect');
const {isRealString} = require('./validation');

describe('validation', () => {
  it('should reject non-string values', () => {
    var response = isRealString(123);
    expect(response).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var response = isRealString('    ');
    expect(response).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var response = isRealString('  Ekrem  ');
    expect(response).toBe(true);
  });
});