const {
  applyComplete,
} = require('./methods-001');

const iterate = (input, detectorsObject, output, keys) => {
  output = output || [{}, false];
  keys = keys || Object.keys(detectorsObject);
  if (keys.length < 1) return output;
  const key = keys.shift();
  const [incomingDetection] = output;
  const detection = detectorsObject[key](input, incomingDetection);
  const [detected, complete] = applyComplete(detection);
  if (complete) return detected;
  return iterate(input, detectorsObject, [detected, complete], keys);
};

module.exports = (input, detectorsObject) => iterate(input, detectorsObject);
