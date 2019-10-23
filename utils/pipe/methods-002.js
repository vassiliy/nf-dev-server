const {defaultPass} = require('./methods-003');

module.exports = {
  getArgList: (argList) => {
    if (typeof argList === 'undefined') return [];
    if (Array.isArray(argList)) return argList;
    return [argList];
  },
  ensure: (passCondition) => ((typeof passCondition === 'function') ? passCondition : defaultPass),
  failed: (fn) => typeof fn !== 'function',
  getSubjectFn: (op) => {
    if (typeof op === 'function') return op;
    if (!Array.isArray(op)) return false;
    const [subject] = op;
    if (typeof subject !== 'function') return false;
    return subject;
  },
  isAsync: (subjectFn, detected) => {
    const asyncCount = (subjectFn.constructor.name === 'AsyncFunction') ? 1 : 0;
    return detected + asyncCount;
  },
};
