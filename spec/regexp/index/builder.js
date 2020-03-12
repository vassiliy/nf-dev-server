const run = require('../../../utils/regexp/run');

module.exports = (dd, that) => {
  run(dd, that, 'username', [
    {
      it: 'detects correct usernames',
      tests: ['hello', 'world']
    },
    {
      it: 'ignores incorrect usernames',
      bounces: ['hell no', 'мир']
    },
  ]);

  run(dd, that, 'removeMultipleWS', [
    {
      it: 'removes multiple spaces',
      given: ' ',
      replaces: ['hell     no', 'wor  \tld'],
      with: ['hell no', 'wor ld']
    },
  ]);
};

['hell   no', 'hell no']
