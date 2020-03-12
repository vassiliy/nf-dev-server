const repeat = (count, pattern) => Array(count).fill(pattern).join('');

const {
  firstWordLetter,
  removeMultipleWS,
  removeSingleEdgeSpace,
} = require('../regexp');

module.exports = {
  capitalize: (string) => string.replace(
    firstWordLetter,
    (letter) => letter.toUpperCase()
  ),
  indent: (count, pattern, subject) => `${repeat(count, pattern)}${subject}`.slice(-count),
  repeat,
  stripSpaces: (string) => string
    .replace(removeMultipleWS, ' ')
    .replace(removeSingleEdgeSpace, ''),
};
