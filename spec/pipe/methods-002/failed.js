module.exports = (dd, that) => {
  dd.drive([
    {
      it: 'given a function, return false',
      i: [(x) => x + 1],
      e: false,
    },
    {
      it: 'given a function, return false',
      i: ['this is not a function'],
      e: true,
    },
  ]);
};
