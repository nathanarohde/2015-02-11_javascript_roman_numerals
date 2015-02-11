describe('coinCombo', function () {
  it('returns the correct values for each type of coin', function() {
    expect(coinCombo(99)).to.eql([[3, 25, 'quarter'], [2, 10, 'dime'], [0, 5, 'nickel'], [4, 1, 'penny']]);
  });
});
