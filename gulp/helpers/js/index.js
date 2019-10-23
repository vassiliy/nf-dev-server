/*
* Function creating the list of `.js` files of given folder
*/

const {
  isDestFile,
  getFileList,
} = require('./methods-001');

const processFileList = (folder, list, output) => {
  if (list.length === 0) return output;
  const file = list.shift();
  if (isDestFile(file)) {
    output.push(`${folder}/${file}`);
  }
  return processFileList(folder, list, output);
};

module.exports = {
  destList: (folder) => {
    const list = getFileList(folder);
    return processFileList(folder, list, []);
  },
  transform: (project, entry) => entry.replace(project, ''),
};
