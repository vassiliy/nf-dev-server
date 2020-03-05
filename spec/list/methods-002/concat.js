module.exports = (dd) => {
  dd.drive([
    {
      it: 'concatenates an item to an accumulator',
      i: [[1, 2, 3], [4, 5]],
      e: [1, 2, 3, 4, 5],
    },
  ]);
};