describe('romanNumeral', function () {
  it('returns an error message if greater than 3999', function() {
    expect(romanNumeral(4000)).to.equal('This number can not be a roman numeral.');
  });
  it('returns a string', function() {
    expect(romanNumeral(1000)).to.equal('M');
  });
  it('returns a string with multiple characters', function() {
    expect(romanNumeral(3000)).to.equal('MMM');
  });
  it('returns a string with different multiple characters', function() {
    expect(romanNumeral(2500)).to.equal('MMD');
  });
  it('returns a string with different multiple characters', function() {
    expect(romanNumeral(267)).to.equal('CCLXVII');
  });
  it('returns a string and succesfully changes exceptions', function() {
    expect(romanNumeral(99)).to.equal('XCIX');
  });
});
