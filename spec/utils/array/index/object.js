const contexts = require('./contexts');

module.exports = (dd) => contexts(dd, {
  'Formats given array to given length (array, count, [placeholder value])': {
    'with longer array given': [{
      it: 'shortens an array to given length',
      i: [[42, 21, 12], 1],
      e: [42],
    }],
    'with shorter array given': [{
      it: 'extends an array to given length',
      i: [[42, 21, 12], 4, 365],
      e: [42, 21, 12, 365],
    }],
    'with matching array given': [{
      it: 'leaves it unchanged',
      i: [[42, 21, 12], 3],
      e: [42, 21, 12],
    }],
    'with shorter array and placeholder given': [{
      it: 'extends an array with given placeholder',
      i: [[42, 21, 12], 4, 365],
      e: [42, 21, 12, 365],
    }],
    'With invalid arguments': {
      'without an array as a first argument': [{
        matcher: 'error',
        it: 'throws error',
        i: [undefined],
        e: 'Cannot read property \'length\' of undefined',
      }],
      'without an integer as a second argument': [{
        matcher: 'error',
        it: 'throws error',
        i: [[1, 2, 3, 4, 5], {}],
        e: 'Invalid array length',
      }],
    },
  },
});
