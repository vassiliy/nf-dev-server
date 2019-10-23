const {reduce} = require('../list');
const {getPath} = require('./methods-004');

module.exports = {
  stringNode: (path, object, key, output) => {
    const names = object[key];
    return reduce(names, output, getPath(path, key));
  },
  traverseSetup: (data) => ({
    get: (node) => Object.keys(data[node]),
    next: (node, item) => Object.keys(data[node][item]),
    recurse: (item) => typeof data[item] === 'object',
    accumulate: (item) => [item],
  }),
};
