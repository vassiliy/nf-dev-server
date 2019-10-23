const path = require('path');

const root = '../../../../../../../';

const transform = (source, keys, target) => {
  if (keys.length === 0) return target;
  const key = keys.shift();
  target[key] = (name) => path.join(__dirname, `${root}${source[key](name)}`);
  return transform(source, keys, target);
};

module.exports = (pathsObject) => transform(pathsObject, Object.keys(pathsObject), {});
