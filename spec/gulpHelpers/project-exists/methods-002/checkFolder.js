const fs = {
  readdirSync: (pathName) => {
    if (pathName === 'invalid') throw new Error('path invalid');
    return ['project1', 'project2'];
  },
};

module.exports = (dd, that) => {
  dd.drive([
    {
      matcher: 'plain',
      it: 'Returns false on file system error',
      i: that.checkFolder(fs)('invalid')('myProject'),
      e: false,
    },
    {
      matcher: 'plain',
      it: 'Returns false if project doesn\'t exist',
      i: that.checkFolder(fs)('folder')('myProject'),
      e: false,
    },
    {
      matcher: 'plain',
      it: 'Returns true if project exists',
      i: that.checkFolder(fs)('folder')('project1'),
      e: true,
    },
  ]);
};
