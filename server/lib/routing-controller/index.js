const {respondWithJSONError}  = require('../config/runtimes').responseHelper;
const parseRoute              = require('./parse-route');
const sendResponse            = require('./send-response');

module.exports = async(req, res) => {
  try {
    const routePayload = parseRoute(req.params);
    await sendResponse(res, routePayload, req.body);
  } catch (e) {
    console.log(e.stack);
    respondWithJSONError(res, e);
  }
};
