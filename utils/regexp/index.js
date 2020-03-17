module.exports = require('./make')({
  firstWordLetter: /\b\w/g,
  removeMultipleWS: /\s+/g,
  removeSingleEdgeSpace: /^ | $/g,

  tabCompletedProjectPath: /^projects[/\\](?=[^/\\])(.+[^/\\])[/\\]?$/,

  jsFile: /\.js$/,

  builder: (string) => [`^${string}$`, 'g'],
});
