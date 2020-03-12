const {
  contextTitle,
  generateSpecs,
} = require('./methods-001');

module.exports = (dd, that, regexpSpecsObject) => (item) => {
  const specs = regexpSpecsObject[item];
  const regexp = that[item];
  dd.context(contextTitle(item, regexp), () => generateSpecs(dd, regexp, specs));
};
