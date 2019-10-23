const fs = require('fs');

const getCodeFile = (fileName) => {
  let code;
  try {
    code = fs.readFileSync(fileName, 'utf8');
  } catch (e) {
    code = 'module.exports = () => {return {error: "generator file read error"};};';
  }
  return code;
};

const getArguments = (code) => code
  .match(/module\.exports = (([^)]+))/)[1]
  .replace('(', '')
  .replace(/\s+/g, '')
  .split(',');

const getBody = (code) => code
  .replace(/^[^{]+{/, '')
  .replace(/};\s*$/, '');

module.exports = {
  getCodeFile,
  getArguments,
  getBody,
};
