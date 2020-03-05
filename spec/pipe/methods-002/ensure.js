module.exports = (dd, that) => {
  dd.drive([
    {
      matcher: 'plain',
      it: 'if no pass condition is specified, return the default one',
      i: that.ensure().name,
      e: 'defaultPass',
    },
    {
      it: 'if a pass condition is specified, return it',
      i: [x => x > 5],
      e: x => x > 5,
    },
  ]);
};