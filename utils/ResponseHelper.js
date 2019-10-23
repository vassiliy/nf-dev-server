const SUCCESS_CODE = 200;
const ERROR_CODE = 400;

class ResponseHelper {
  static addHeaderResponseCode(response, code) {
    response.set('X-Response-Code', code);
  }

  async respondWithJSON(response, body) {
    ResponseHelper.addHeaderResponseCode(response, ResponseHelper.SUCCESS);
    response.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.set('Pragma', 'no-cache');
    response.set('Expires', '0');
    response.type('application/json');
    response.status(ResponseHelper.SUCCESS).json(body);
  }

  async respondWithJSONError(response, error) {
    ResponseHelper.addHeaderResponseCode(response, ResponseHelper.ERROR);
    response.status(ResponseHelper.ERROR).json({error});
  }

  static get SUCCESS() {
    return SUCCESS_CODE;
  }

  static get ERROR() {
    return ERROR_CODE;
  }
}

module.exports = ResponseHelper;
