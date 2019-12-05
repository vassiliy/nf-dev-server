module.exports = (dd) => {
  dd.context('Formats given array to given length (array, count, [placeholder value])', () => {
    dd.context('with longer array given', () => {
      dd.drive([
        {
          it: 'shortens an array to given length',
          i: [[42, 21, 12], 1],
          e: [42],
        },
      ]);
    });
    dd.context('with shorter array given', () => {
      dd.drive([
        {
          it: 'extends an array to given length',
          i: [[42, 21, 12], 4, 365],
          e: [42, 21, 12, 365],
        },
      ]);
    });
    dd.context('with matching array given', () => {
      dd.drive([
        {
          it: 'leaves it unchanged',
          i: [[42, 21, 12], 3],
          e: [42, 21, 12],
        },
      ]);
    });
    dd.context('with shorter array and placeholder given', () => {
      dd.drive([
        {
          it: 'extends an array with given placeholder',
          i: [[42, 21, 12], 4, 365],
          e: [42, 21, 12, 365],
        },
      ]);
    });
  });
  dd.context('With invalid arguments', () => {
    dd.context('without an array as a first argument', () => {
      dd.drive([
        {
          matcher: 'error',
          it: 'throws error',
          i: [undefined],
          e: 'Cannot read property \'length\' of undefined',
        },
      ]);
    });
    dd.context('without an integer as a second argument', () => {
      dd.drive([
        {
          matcher: 'error',
          it: 'throws error',
          i: [[1, 2, 3, 4, 5], {}],
          e: 'Invalid array length',
        },
      ]);
    });
  });
};
