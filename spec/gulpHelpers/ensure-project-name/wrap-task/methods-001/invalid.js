module.exports = (dd) => {
  dd.context('Checks whether a given project name is not a string (projectName)', () => {
    dd.context('with string given', () => {
      dd.drive([
        {
          it: 'return false',
          i: ['ProjectName'],
          e: false,
        },
      ]);
    });
    dd.context('with non-string given', () => {
      dd.drive([
        {
          it: 'return true',
          i: [{'project': 'name'}],
          e: true,
        },
      ]);
    });
  });
};
