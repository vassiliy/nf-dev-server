const paramNames = ['on', 'tw', 'th', 'fo', 'fi', 'si', 'se', 'ei', 'ni', 'te', 'el'];
const routes = paramNames.map((param, index) => `/:${paramNames.slice(0, index + 1).join('/:')}`);
routes.unshift('/');

module.exports = {
  paramNames,
  routes,
};
