const run = require('../../../utils/ddry/runRegexp');

const extend = regexpModule => ({...regexpModule,
  generated: regexpModule.builder('helloWorld'),
});

module.exports = (dd, that) => run(dd, extend(that), {
  firstWordLetter: [
    {
      it: 'captures first letters of words',
      inside: ['hello World .privet ???MIR'],
      finds: [[['h'], ['W'], ['p'], ['M']]],
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

  removeSingleEdgeSpace: [
    {
      it: 'removes a space at the beginning or at the end of a string',
      given: '',
      replaces: [' <--here', 't h e r e -- > ', ' around '],
      with: ['<--here', 't h e r e -- >', 'around']
    },
  ],

  tabCompletedProjectPath: [
    {
      it: 'extracts project name from tab-completed path',
      inside: ['projects/a/b/c', 'projects/a/b/c/'],
      finds: [[['projects/a/b/c', 'a/b/c']],
              [['projects/a/b/c/', 'a/b/c']]],
    },
    {
      it: 'ignores strings which are not valid project paths',
      bounces: ['wrong/path']
    },
  ],

  jsFile: [
    {
      it: 'detects filenames with .js extension',
      tests: ['hello.js', 'world.old.js', '.js']
    },
    {
      it: 'ignores filenames without .js extension',
      bounces: ['hello.javascript', 'world.js.old', 'node-js']
    },
  ],


});

// module.exports = (dd, that) => {
//   console.log(that.generated);
//   dd.drive([{
//     matcher: 'plain',
//     it: 'works',
//     i: 1,
//     e: 1
//   }]);
// };
