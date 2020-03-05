module.exports = (dd, that) => {
  dd.drive([
    {
      matcher: 'plain',
      it: 'generator that acts like map',
      i: Array.from(that.iterate([1, 2, 3], x => x*x)),
      e: [1, 4, 9],
    }
  ]);
};