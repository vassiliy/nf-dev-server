module.exports = {
  formatName: (fileName, path) => fileName
    .replace(`${path}/`, '')
    .replace('.pug', ''),
};
