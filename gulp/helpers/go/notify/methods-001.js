const {capitalize} = require('../../../../utils/string');

module.exports = {
  extractName: (fn) => ((typeof fn === 'function')
    ? `notifyServerWith${capitalize(fn.name)}`
    : 'notifyServer'),
};
