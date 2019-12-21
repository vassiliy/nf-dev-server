module.exports = (dd, that) => {
  const fn = (a) => a * a;
  const name = 'someInterestingNameHere';
  const updated = that.setName(fn, name);
  dd.context('Sets name to a given anonymus function (fn, name)', () => {
    dd.context('With given anonymus function', () => {
      dd.drive([{
        matcher: 'plain',
        it: 'and returns it',
        i: updated.name,
        e: name,
      }]);
    });
    dd.context('Without given function', () => {
      dd.drive([{
        matcher: 'error',
        it: 'throws error',
        i: [{}],
        e: 'First agrument is not a function',
      }]);
    });
  });
};
