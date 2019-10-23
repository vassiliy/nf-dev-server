const dev = require('./dev');

module.exports = async(stack) => {
  const {
    payload,
    renderMode,
    reqBody,
  } = stack;
  const rendered = await dev[renderMode](payload, reqBody);
  return Object.assign(stack, {rendered});
};
