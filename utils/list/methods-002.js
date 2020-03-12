const {ensureErrorsCollection} = require('./methods-003');

module.exports = {
  // I don't understand :-(
  collectErrors: (acc, item) => {
    if (typeof item.error !== 'string') return Object.assign(acc, item);
    const error = ensureErrorsCollection(acc);
    error.push(item.error);
    return Object.assign(acc, {error});
  },
  concat: (acc, item) => acc.concat(item),
};
