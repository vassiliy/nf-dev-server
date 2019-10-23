module.exports = {
  fetchParam: (argObject, key) => {
    if (typeof argObject[key] === 'undefined') return false;
    return argObject[key];
  },
};
