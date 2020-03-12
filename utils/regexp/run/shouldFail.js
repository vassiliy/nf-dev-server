module.exports = (strings) => regexp =>
  strings.map(
    string => ({
      it: string,
      i: [string, string.match(regexp) == null],
      e: [string, true]
    })
  );
