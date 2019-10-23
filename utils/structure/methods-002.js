const {
  stringNode,
} = require('./methods-003');

const trailDataObject = (path, object, keys, output) => {
  if (keys.length < 1) return output;
  const key = keys.shift();
  output = (typeof object[key] === 'string')
    ? stringNode(path, object, key, output)
    : trailDataObject(
      `${path}/${key}`, object[key], Object.keys(object[key]), output
    );
  return trailDataObject(path, object, keys, output);
};

module.exports = {
  processDataKey: (stack) => (key) => {
    const {data} = stack;
    const path = stack.base[key];
    return trailDataObject(
      path, data[key], Object.keys(data[key]), {}
    );
  },
};
