module.exports = (dd) => {
  dd.drive([
    {
      it: 'given a function, return false',
      i: [(x) => x + 1],
      e: false,
    },
    {
      it: 'given a non-function, return true',
      i: ['this is not a function'],
      e: true,
    },
  ]);
};
