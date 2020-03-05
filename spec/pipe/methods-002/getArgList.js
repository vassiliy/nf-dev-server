module.exports = (dd, that) => {
  dd.drive([
    {
      it: 'given no arguments, return an empty list',
      i: [],
      e: [],
    },
    {
      it: 'given an array, return it',
      i: [[1, 2, 3]],
      e: [1, 2, 3],
    },
    {
      it: 'given something else, return a single-element array containing it',
      i: ['hello'],
      e: ['hello'],
    },
  ]);
};