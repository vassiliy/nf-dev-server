/*
* Function creating the list of `.js` files of given folder level I methods
*/

const fs = require('fs');

const {jsPath} = require('../../../utils/regexp');

module.exports = {
  isDestFile: (file) => (jsPath.test(file)),
  getFileList: (folder) => {
    try {
      return fs.readdirSync(folder);
    } catch (e) {
      return {}[`${e}`] || [];
    }
  },
};
