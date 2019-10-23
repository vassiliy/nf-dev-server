const {ensure} = require('../fn');
const {
  ensureArr,
  getAccFn,
  iterate,
} = require('./methods-001');

module.exports = {
  map: (source, fn) => Array.from(iterate(ensureArr(source), fn)),
  reduce: (source, acc, itemFn, accFn) => {
    itemFn = ensure(itemFn);
    accFn = getAccFn(acc, accFn);
    for (const item of iterate(ensureArr(source), itemFn)) {
      acc = accFn(acc, item);
    }
    return acc;
  },
};
