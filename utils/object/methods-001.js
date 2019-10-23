const {
  assign,
  ensure,
  failing,
  joinKey,
  parse,
  renderItem,
  thread,
} = require('./methods-002');

const {s} = require('../literal');
const {reduce} = require('../list');
const errors = require('./errors');

module.exports = {
  assign,
  fetch: (object, xPath, type) => {
    if (failing(object)) return errors.failingObject();
    xPath = parse(xPath);
    if (xPath === false) return errors.invalidXPath();
    [steps, tail] = xPath;
    const container = thread(object, steps);
    type = ensure(type);
    if (!type) return [true, container[tail]];
    const gotType = typeof container[tail];
    if (gotType !== type) return errors.typeMismatch(type, gotType);
    return [true, container[tail]];
  },
  fetchJSON: (object, key) => {
    if (typeof object[key] !== 'string') return errors.keyMissing(key);
    try {
      return [true, JSON.parse(object[key])];
    } catch (e) {
      return errors.jsonParseError(key);
    }
  },
  inspectRequested: (object, requested) => {
    console.log(requested);
    return object;
  },
  inspectWhole: (object) => {
    console.log(object);
    return object;
  },
  join: (object, list) => {
    if (typeof list !== 'string') return object;
    return reduce(s(list), object, false, renderItem(joinKey));
  },
  match: (object, keysLiteral) => s(keysLiteral).map((key) => object[key]),
  objectToKeep: (item) => assign({}, item),
  skip: (object, list) => {
    if (typeof list !== 'string') return object;
    return reduce(s(list), object, false, renderItem());
  },
};
