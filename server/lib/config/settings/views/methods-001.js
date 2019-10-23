const fs = require('fs');
const path = require('path');
const {
  formatName,
} = require('./methods-002');

const walkSync = (dir, fileList = []) => {
  fs.readdirSync(dir).forEach((file) => {
    fileList = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), fileList)
      : fileList.concat(path.join(dir, file));
  });
  return fileList;
};

const formatNames = (fileList, viewsPath, files) => {
  if (fileList.length < 1) return files;
  const fileName = fileList.shift();
  files.push(formatName(fileName, viewsPath));
  return formatNames(fileList, viewsPath, files);
};

module.exports = {
  formatNames,
  walkSync,
};
