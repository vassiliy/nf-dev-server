/*
* Function creating the list of `.js` files of given folder level I methods
*/

const fs = require('fs');

module.exports = {
  isDestFile: (file) => (/\.js$/.test(file)),
  getFileList: (folder) => {
    try {
      return fs.readdirSync(folder);
    } catch (e) {
      return {}[`${e}`] || [];
    }
  },
};
