const structure = require('../../../../utils/structure');
const data = require('./data');
const {getTail} = require('./methods-001');

module.exports = {
  all: (path, extension) => {
    const tail = getTail(extension);
    return `${path}/${tail}`;
  },
  projectPath: (project, pathName) => structure({project}, data)[pathName],
  setStructure: (base) => structure(base, data),
};
