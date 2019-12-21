module.exports = (dd, that) => {
  const fn = (a) => a * a;
  const given = that.ensure(fn);
  const fallback = that.ensure(undefined, fn);
  const nothing = that.ensure();
  dd.context('Checks first argument is a function and returns fallback if not (given, fallback)', () => {
    dd.context('with given first agrument function', () => {
      dd.drive([{
        matcher: 'plain',
        it: 'returns that `given` function',
        i: given(2),
        e: 4,
      }]);
    });
    dd.context('without given first agrument function', () => {
      dd.drive([{
        matcher: 'plain',
        it: 'returns `fallback` function',
        i: fallback(3),
        e: 9,
      }]);
    });
    dd.context('without given functions at all', () => {
      dd.drive([{
        matcher: 'plain',
        it: 'returns defult fallback function',
        i: nothing(5),
        e: 5,
      }]);
    });
  });
};
