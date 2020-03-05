const repeat = (count, pattern) => Array(count).fill(pattern).join('');

module.exports = {
  capitalize: (string) => string.replace(
    /\b\w/g,
    (letter) => letter.toUpperCase()
  ),
  indent: (count, pattern, subject) => `${repeat(count, pattern)}${subject}`.slice(-count),
  repeat,
  stripSpaces: (string) => string
  .replace(/\s+/g, ' ')
  .replace(/^ | $/g, ''),
};
