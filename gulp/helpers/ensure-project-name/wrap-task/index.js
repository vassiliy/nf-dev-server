/*
* Error-protected gulp task wrapper
*/

const {
  invalid,
  extract,
} = require('./methods-001');

module.exports = (project) => (task) => (async() => {
  if (invalid(project)) throw new Error('Project name `-p` parameter is mandatory');
  project = extract(project);
  return task(project);
});
