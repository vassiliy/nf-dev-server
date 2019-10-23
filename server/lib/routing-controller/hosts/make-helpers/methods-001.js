const {env} = require('./methods-002');

module.exports = {
  helper: (hostsObject) => (item) => {
    if (item !== 'apiHost') return {[item]: (path) => `${hostsObject[item]}${path || ''}`};
    return {env: env(hostsObject)};
  },
};
