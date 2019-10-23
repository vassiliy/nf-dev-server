const pipe = require('../../../../utils/pipe');
const render = require('../render');
const respond = require('./respond');
const getPayload = require('./get-payload');

module.exports = (res, routePayload, reqBody) => pipe(
  {
    res,
    routePayload,
    reqBody,
  },
  [
    getPayload,
    render,
    respond,
  ]
);
