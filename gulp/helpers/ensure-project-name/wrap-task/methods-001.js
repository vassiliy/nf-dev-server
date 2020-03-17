const detect = require('../../../../utils/detect');

const {tabCompletedProjectPath} = require('../../../../utils/regexp');

const fromRegexp = (regexp, string) => (group) => {
  const result = string.match(regexp);
  if (!result) return false;
  return result[group];
};

module.exports = {
  invalid: (projectName) => typeof projectName !== 'string',
  extract: (projectName) => detect(projectName, {
    tabCompleted: (name) =>
      fromRegexp(tabCompletedProjectPath, name)(1),
    unchanged: (name) => name,
  }),
};
