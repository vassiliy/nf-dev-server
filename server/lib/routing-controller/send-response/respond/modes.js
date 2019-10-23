const {respondWithJSON} = require('../../../config/runtimes').responseHelper;

module.exports = {
  json: (res, rendered) => respondWithJSON(res, rendered),
  html: (res, rendered) => res.send(rendered),
  text: (res, rendered) => res.send(rendered),
};
