const {match} = require('../../../../utils/object');
const settings = require('../../../settings');

const [asset, link, apiHost] = match(settings, 'asset link apiHost');

module.exports = {asset, link, apiHost};
