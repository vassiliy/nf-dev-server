module.exports = (dd) => {
  dd.context('Does nothing with given argument (a)', () => {
    dd.drive([{
      it: 'but returns it',
      i: [{foo: 'bar', then: 42}],
      e: {foo: 'bar', then: 42},
    }]);
  });
};
