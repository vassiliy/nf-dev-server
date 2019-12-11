module.exports = (dd) => {
  dd.context('Checks if given array is a proper detector (detection)', () => {
    dd.context('without given array', () => {
      dd.drive([{
        it: 'returns false',
        i: [{}],
        e: false,
      }]);
    });
    dd.context('with array\'s length not equal to 2', () => {
      dd.drive([{
        it: 'returns false',
        i: [['foo', 'bar', 'then']],
        e: false,
      }]);
    });
    dd.context('with array\'s second element type not boolean', () => {
      dd.drive([{
        it: 'returns false',
        i: [['foo', 'bar']],
        e: false,
      }]);
    });
    dd.context('... finally', () => {
      dd.drive([{
        it: 'returns true',
        i: [[{foo: 'bar'}, false]],
        e: true,
      }]);
    });
  });
};
