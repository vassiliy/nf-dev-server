const ensureProjectName = require('./helpers/ensure-project-name');
const projectExists = require('./helpers/project-exists');

module.exports = ensureProjectName((project) => {
  if (!projectExists(project)) throw new Error(`Project "${project}" does not exist, please check spelling.`);
  return process.env.FROM = `projects/${project}`; // eslint-disable-line
});
