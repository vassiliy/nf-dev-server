/*
* Function checking if given project exists level I methods
*/

const fs = require('fs');
const path = require('path');

const {checkFolder} = require('./methods-002');

const getPath = (pathStub) => {
  const relative = pathStub || '../../../../../../projects';
  return pathStub || path.join(__dirname, relative);
};

module.exports = {
  checkFolder: checkFolder(fs),
  getPath,
};
