module.exports = require('./make')({
  firstWordLetter: /\b\w/g,
  removeMultipleWS: /\s+/g,
  removeSingleEdgeSpace: /^ | $/g,
  username: /^[a-zA-Z0-9_.-]+$/g,
  builder: (string) => [`^${string}$`, 'g'],
});
