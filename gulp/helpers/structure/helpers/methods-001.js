module.exports = {
  getTail: (xtn) => ((typeof xtn === 'string') ? `**/*.${xtn}` : '**/*'),
};
