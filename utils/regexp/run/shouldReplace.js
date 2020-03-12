module.exports = (given, replaces, with_) => regexp => {
  const zipReplacesWith = replaces.map((e, i) => [e, with_[i]]);
  return zipReplacesWith.map(
    ([old, new_]) => ({
      it: `${old} => ${new_}`,
      i: [old, old.replace(regexp, given)],
      e: [old, new_]
    })
  );
}