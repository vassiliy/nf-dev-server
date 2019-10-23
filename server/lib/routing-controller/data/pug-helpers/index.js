module.exports = {
  isTable: (container, key) => {
    if (!container) return false;
    if (typeof container !== 'object') return false;
    if (typeof key !== 'string') return false;
    const given = container[key];
    if (typeof given !== 'object') return false;
    if (!Array.isArray(given)) return false;
    if (given.length < 1) return false;
    return true;
  },
};
