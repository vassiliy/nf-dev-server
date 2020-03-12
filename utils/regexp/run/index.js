const driveRegex = require('./driveRegex');
const shouldFail = require('./shouldFail');
const shouldMatch = require('./shouldMatch');
const shouldReplace = require('./shouldReplace');

const containsAll = (obj, properties) => {
  for (const prop of properties) 
    if (obj[prop] === undefined) return false;
  return true;
};

const unitTestGenerators = [
  [['given', 'replaces', 'with'],
    ({given, replaces, with: output}) => shouldReplace(given, replaces, output)],
  [['tests'],
    ({tests}) => shouldMatch(tests)],
  [['bounces'],
    ({bounces}) => shouldFail(bounces)],
];

const getUnitTests = (test) => {
  for (const [params, func] of unitTestGenerators)
    if (containsAll(test, params))
      return func(test);
  console.log(test);
  throw `Incorrect test`;
};


module.exports = (dd, that, regexName, tests) => {
  const regexpObject = {[regexName]: that[regexName]};
  dd.context(`${regexName} === ${that[regexName]}`, () => {
    for (const test of tests)
      dd.context(test.it, () => 
        driveRegex(dd, getUnitTests(test), regexpObject)
      );
  });
};

