const {
  detectAsync,
  asyncPipe,
  pipe,
} = require('./methods-001');

module.exports = (stack, ops) => {
  const detected = detectAsync([].concat(ops));
  if (detected === false) return stack;
  if (detected > 0) return asyncPipe(stack, ops);
  return pipe(stack, ops);
};
