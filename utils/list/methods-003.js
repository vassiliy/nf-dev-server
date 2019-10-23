module.exports = {
  ensureErrorsCollection: (obj) => {
    if (Array.isArray(obj.error)) return obj.error;
    if (typeof obj.error === 'string') return [obj.error];
    return [];
  },
};
