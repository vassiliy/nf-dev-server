const {
  getArgList,
  ensure,
  failed,
  getSubjectFn,
  isAsync,
} = require('./methods-002');

const asyncPipe = async(stack, ops) => {
  if (ops.length < 1) return stack;
  const op = ops.shift();
  if (!failed(op)) return asyncPipe((await op(stack)), ops);
  const [fn, givenArgList, passCondition] = op;
  if (failed(fn)) return stack;
  argList = getArgList(givenArgList);
  const pass = ensure(passCondition);
  if (pass(stack)) return asyncPipe(stack, ops);
  argList.unshift(stack);
  return asyncPipe((await fn(...argList)), ops);
};

const pipe = (stack, ops) => {
  if (ops.length < 1) return stack;
  const op = ops.shift();
  if (!failed(op)) return pipe(op(stack), ops);
  const [fn, givenArgList, passCondition] = op;
  if (failed(fn)) return stack;
  argList = getArgList(givenArgList);
  const pass = ensure(passCondition);
  if (pass(stack)) return pipe(stack, ops);
  argList.unshift(stack);
  return pipe(fn(...argList), ops);
};

const detectAsync = (ops, detected) => {
  detected = (typeof detected === 'number') ? detected : 0;
  if (ops.length < 1) return detected;
  const op = ops.shift();
  const subjectFn = getSubjectFn(op);
  if (!subjectFn) return false;
  return detectAsync(ops, isAsync(subjectFn, detected));
};

module.exports = {
  asyncPipe: async(stack, ops) => asyncPipe(stack, ops),
  pipe: (stack, ops) => pipe(stack, ops),
  detectAsync: (ops) => detectAsync(ops),
};
