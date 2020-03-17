module.exports = {
  replace: ({given, replaces, with: output}) => (regexp) => replaces
    .map((e, i) => [e, output[i]])
    .map(([old, new_]) => ({
      matcher: 'plain',
      it: `'${old}'' => '${new_}'`,
      i: [old, old.replace(regexp, given)],
      e: [old, new_],
    })),
  detect: ({tests}) => (regexp) => tests.map(
    (string) => ({
      matcher: 'plain',
      it: string,
      i: [string, string.match(regexp) !== null],
      e: [string, true],
    })
  ),
  ignore: ({bounces}) => (regexp) => bounces.map(
    (string) => ({
      matcher: 'plain',
      it: string,
      i: [string, string.match(regexp) === null],
      e: [string, true],
    })
  ),
  find: ({inside, finds}) => (regexp) => inside
    .map((e, i) => [e, finds[i]])
    .map(
      ([string, groups]) => ({
        matcher: 'plain',
        it: `${JSON.stringify(groups)} in ${string}`,
        i: [string, [...string.matchAll(regexp)].map(x => [...x])],
        e: [string, groups]
    })),

};
