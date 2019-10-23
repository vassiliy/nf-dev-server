const ResponseHelper = require('../../../utils/ResponseHelper');
const {settings} = require('../config/settings/settings-config');

const responseHelper = new ResponseHelper();

module.exports = {
  settings,
  responseHelper,
};
