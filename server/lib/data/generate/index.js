const {generators} = require('../../routing-controller/paths');
const {
  getCodeFile,
  getArguments,
  getBody,
} = require('./methods-001');

module.exports = (name, genFn = generators) => {
  const file = genFn(name);
  const code = getCodeFile(file);
  const args = getArguments(code);
  const body = getBody(code);
  let generate;
  try {
    generate = new Function(...args, body); // eslint-disable-line
  } catch (e) {
    generate = () => ({error: 'generator code parse error'});
  }
  return generate;
};
