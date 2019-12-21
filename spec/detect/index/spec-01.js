const input = {foo: 1, bar: 'two'};
const detectors = {
  one: (obj) => [obj, false],
  two: (obj) => {
    obj.foo = 42;
    return [obj, true];
  },
};

module.exports = (dd) => {
  dd.context('Searches for appropriate detector to a given input and applies it to it (input, detectorsObject)', () => {
    dd.context('with given suitable detectors', () => {
      dd.drive([{
        it: 'returns modified input',
        i: [input, detectors],
        e: {foo: 42, bar: 'two'},
      }]);
    });
    dd.context('when detector is not found', () => {
      dd.drive([{
        it: 'returns default output',
        i: [input, {}],
        e: [{}, false],
      }]);
    });
  });
  dd.context('With invalid arguments', () => {
    dd.context('with first argument which could not be properly hadled by detectors', () => {
      dd.drive([{
        matcher: 'error',
        it: 'falls with a detector\'s error',
        i: [undefined, detectors],
        e: 'Cannot set property \'foo\' of undefined',
      }]);
    });
    dd.context('without a detectors object as a second argument', () => {
      dd.drive([{
        matcher: 'error',
        it: 'throws error',
        i: ['something', undefined],
        e: 'Cannot convert undefined or null to object',
      }]);
    });
  });
};
