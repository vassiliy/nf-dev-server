module.exports = (dd) => {
  dd.context('Returns the property of the given object (object, key)', () => {
    dd.context('when the property is defined', () => {
      dd.drive([{
        it: 'returns object\'s property',
        i: [{cust_id: 123}, 'cust_id'],
        e: 123,
      }]);
    });
    dd.context('when the property is not defined', () => {
      dd.drive([{
        it: 'returns false',
        i: [{cust_id: 123}, '42'],
        e: false,
      }]);
    });
  });
  dd.context('With invalid arguments', () => {
    dd.context('without an objects as a first argument', () => {
      dd.drive([{
        matcher: 'error',
        it: 'throws error',
        i: [undefined],
        e: 'Cannot read property \'undefined\' of undefined',
      }]);
    });
  });
};
