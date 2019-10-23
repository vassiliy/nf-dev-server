/*
* Create project from example markup Gulp task
*/

const {src, dest} = require('gulp');
const ensureProjectName = require('./helpers/ensure-project-name');
const projectExists = require('./helpers/project-exists');

const folders = [
  'node_modules/@greenminds/nf-dev-server/blank/**/*',
  '!node_modules/@greenminds/nf-dev-server/blank/node_modules/**/*',
];

module.exports = ensureProjectName((project) => {
  if (projectExists(project)) throw new Error(`Project "${project}" already exists, project start skipped.`);
  return src(folders)
    .pipe(dest(`projects/${project}`));
});
