module.exports = (dd) => {
  dd.context('Extract project name from a path (path)', () => {
    dd.context('with just the project name given', () => {
      dd.drive([
        {
          it: 'return it',
          i: ['ProjectName'],
          e: 'ProjectName',
        },
      ]);
    });
    dd.context('with slash-terminated path given', () => {
      dd.drive([
        {
          it: 'extract just the project name',
          i: ['projects/deep/deep/deep/inside/projectName/'],
          e: 'deep/deep/deep/inside/projectName',
        },
      ]);
    });
    dd.context('with non-slash-terminated path given', () => {
      dd.drive([
        {
          it: 'extract just the project name',
          i: ['projects/deep/deep/deep/inside/projectName'],
          e: 'deep/deep/deep/inside/projectName',
        },
      ]);
    });
  });
};
