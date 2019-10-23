module.exports = {
  addError: (acc, item) => {
    if (!item) return acc;
    if (typeof item !== 'object') return acc;
    if (typeof item.error !== 'string') return acc;
    acc.push(item.error);
    return acc;
  },
  errorMisset: (item) => () => `Error "${item}" definition invalid`,
};
