module.exports = (dd) => {
  dd.context('Fetches given property from `yargs` object (key)', () => {
    dd.context('with not existed object\'s key', () => {
      dd.drive([{
        it: 'returns false',
        i: ['That key must not be existed in the given object. At least I hope so'],
        e: false,
      }]);
    });
  });
};
