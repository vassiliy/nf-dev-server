module.exports = (dd) => {
  dd.context( 'Generate a glob mask for file with given extension'
             +'in given path (path, extension)', () => {
    dd.context('with an extension and a path given', () => {
      dd.drive([
        {
          it: 'return a glob mask with that extension and path',
          i: ['deep/deep/down', 'txt'],
          e: 'deep/deep/down/**/*.txt',
        },
      ])
    });
  });
};