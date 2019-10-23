const repeat = (count, pattern) => Array(count).fill(pattern).join('');

module.exports = {
  capitalize: (string) => string.replace(
    /\w\S*/g,
    (txt) => `${txt.charAt(0).toUpperCase()}${txt.substr(1)}`
  ),
  indent: (count, pattern, subject) => `${repeat(count, pattern)}${subject}`.slice(-count),
  repeat,
  stripSpaces: (string) => string
    .replace(/^\s+|\s+$/, '')
    .replace(/\s{1}\s+/g, ' '),
};
