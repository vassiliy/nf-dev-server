module.exports = (dd) => {
  dd.context('Checks if detectioning is completed (detection)', () => {
    dd.context('with given proper detection object', () => {
      dd.drive([{
        it: 'returns detection object',
        i: [[{foo: 'bar'}, false]],
        e: [{foo: 'bar'}, false],
      }]);
    });
    dd.context('with given false', () => {
      dd.drive([{
        it: 'returns incomplete detection tuple',
        i: [false],
        e: [false, false],
      }]);
    });
    dd.context('... otherwise', () => {
      dd.drive([{
        it: 'returns complete detection tuple',
        i: [[{foo: 'bar'}, 42]],
        e: [[{foo: 'bar'}, 42], true],
      }]);
    });
  });
};
