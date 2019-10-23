module.exports = {
  getPath: (path, key) => (item) => {
    if (`${key}` === '') return {[item]: `${path}`};
    return {[item]: `${path}/${key}`};
  },
};
