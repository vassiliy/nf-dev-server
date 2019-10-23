const {
  formatNames,
  walkSync,
} = require('./methods-001');

module.exports = (viewsPath) => {
  if (!viewsPath) return [];
  const views = walkSync(viewsPath);
  return formatNames(views, viewsPath, []);
};
