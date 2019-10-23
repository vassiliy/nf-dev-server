const {
  project,
  json,
} = require('../../../../gulp/helpers/folders');

module.exports = {
  basedir: () => `${project}/pug/views`,
  content: (name) => `${project}/pug/content/${name}.pug`,
  generators: (name) => `${project}/data/_generators/${name}.js`,
  data: (name) => `${json}/${name}.json`,
  exports: (name) => `${json}/${name}`,
  view: (name) => `${project}/pug/views/${name}.pug`,
};
