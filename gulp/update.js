const {src, dest} = require('gulp');
const ensureProjectName = require('./helpers/ensure-project-name');
const projectExists = require('./helpers/project-exists');

const files = [
  'node_modules/@greenminds/nf-dev-server/deploy/bitbucket-pipelines.yml',
  'node_modules/@greenminds/nf-dev-server/deploy/package.json',
];

module.exports = ensureProjectName((project) => {
  if (!projectExists(project)) throw new Error(`Project "${project}" does not exist, please check spelling.`);
  return src(files)
    .pipe(dest(`projects/${project}`));
});
