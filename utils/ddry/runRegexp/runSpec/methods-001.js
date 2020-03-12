const {reduce} = require('../../../list');
const detect = require('../../../detect');

const detectors = require('../detectors');

module.exports = {
  contextTitle: (name, regexp) => {
    if (typeof regexp === 'function') return name;
    return `${name}: ${regexp}`;
  },
  generateSpecs: (dd, regexp, specs) => reduce(
    specs,
    [],
    (item) => dd.context(item.it, () => detect(item, detectors(dd, regexp)))
  ),
};
