module.exports = (dd) => {
  dd.drive([
    {
      it: 'given an array, act like map',
      i: [[1, 2, 3], (x) => x * x],
      e: [1, 4, 9],
    },

    {
      it: 'given something else, convert it to an array and act like map',
      i: ['abc def ghi', (x) => x + x],
      e: ['abcabc', 'defdef', 'ghighi'],
    },
  ]);
};
