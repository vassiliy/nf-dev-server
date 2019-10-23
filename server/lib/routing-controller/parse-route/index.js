const {paramNames} = require('./or');

const processParamKeys = (params, keysList, data) => {
  if (keysList.length === 0) return data;
  const key = keysList.shift();
  if (params[key]) {
    data.push(params[key]);
  }
  return processParamKeys(params, keysList, data);
};

module.exports = (params) => processParamKeys(
  params,
  [].concat(paramNames),
  []
);
