const exec = require('await-exec');
const {lintFix} = require('./helpers/exec');
const ensureProjectName = require('./helpers/ensure-project-name');
const projectExists = require('./helpers/project-exists');

module.exports = ensureProjectName(async(project) => {
  if (!projectExists(project)) throw new Error(`Project "${project}" does not exist, please check spelling.`);
  const {stdout} = await exec(lintFix(project));
  console.log(stdout);
});
