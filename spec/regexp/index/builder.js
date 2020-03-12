const run = require('../../../utils/ddry/runRegexp');

module.exports = (dd, that) => run(dd, that, {
  username: [
    {
      it: 'detects correct usernames',
      tests: ['hello', 'world'],
    },
    {
      it: 'ignores incorrect usernames',
      bounces: ['hell no', 'мир'],
    },
  ],

  removeMultipleWS: [
    {
      it: 'removes multiple spaces',
      given: ' ',
      replaces: ['hell     no', 'wor  \tld'],
      with: ['hell no', 'wor ld'],
    },
  ],
});
