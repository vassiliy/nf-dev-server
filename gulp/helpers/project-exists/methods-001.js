/*
* Function checking if given project exists level I methods
*/

const fs = require('fs');
const path = require('path');

const checkFolder = (projectsPath) => (projectName) => {
  let folderList;
  try {
    folderList = fs.readdirSync(projectsPath);
  } catch (e) {
    folderList = [];
  }
  return folderList.indexOf(projectName) > -1;
};

const getPath = (pathStub) => {
  const relative = pathStub || '../../../../../../projects';
  return pathStub || path.join(__dirname, relative);
};

module.exports = {
  checkFolder,
  getPath,
};
