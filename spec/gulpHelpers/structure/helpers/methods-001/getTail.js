module.exports = (dd) => {
  dd.context( 'Converts file extension to a glob mask for finding'
             +'files with that extension(xtn)', () => {
    dd.context('with an extension given', () => {
      dd.drive([
        {
          it: 'return a glob mask with that extension',
          i: ['txt'],
          e: '**/*.txt',
        },
      ])
    });
    dd.context('with non-string given', () => {
      dd.drive([
        {
          it: 'return a wildcard glob mask',
          i: [undefined],
          e: '**/*',
        },
      ])
    });
  });
};