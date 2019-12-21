module.exports = (dd, that) => {
  const fn = (a) => a * a;
  const res = that.ensure(fn, {foo: 'bar', then: 42});
  dd.context('Checks if first argument is a function (given, fallback)', () => {
    dd.context('with given function ', () => {
      dd.drive([{
        matcher: 'plain',
        it: 'returns it back',
        i: res(3),
        e: 9,
      }]);
    });
    dd.context('without given function', () => {
      dd.drive([{
        it: 'returns fallback',
        i: [undefined, 42],
        e: 42,
      }]);
    });
  });
};
