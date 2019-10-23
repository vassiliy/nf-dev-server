const processSettings = (data, keys, output) => {
  output = output || {};
  if (keys.length < 1) return output;
  key = keys.shift();
  output[key] = data[key];
  return processSettings(data, keys, output);
};

module.exports = (data, defaultKeys) => processSettings(data, defaultKeys);
