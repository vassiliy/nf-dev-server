/*
* Function checking if given project exists
*/

const {
  checkFolder,
  getPath,
} = require('./methods-001');

module.exports = checkFolder(getPath());
