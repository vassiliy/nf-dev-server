module.exports = (stack) => {
  const {routePayload} = stack;
  const [mode, ...apiPayload] = routePayload;
  if (mode !== 'api') {
    return Object.assign(stack, {
      renderMode: 'html',
      payload: routePayload,
    });
  }
  return Object.assign(stack, {
    renderMode: 'json',
    payload: apiPayload,
  });
};
