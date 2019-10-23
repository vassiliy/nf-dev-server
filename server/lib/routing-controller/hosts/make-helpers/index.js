const {reduce} = require('../../../../../utils/list');
const {helper} = require('./methods-001');

module.exports = (hostsObject) => reduce(hostsObject, {}, helper(hostsObject));
