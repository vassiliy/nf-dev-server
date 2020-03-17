const detect = require('../../../../utils/detect');

const {
  slashTabCompletedProjectPath,
  tabCompletedProjectPath
} = require('../../../../utils/regexp');

const fromRegexp = (regexp, string) => (group) => {
  const result = regexp.exec(string);
  if (!result) return false;
  return result[group];
};

module.exports = {
  invalid: (projectName) => typeof projectName !== 'string',
  extract: (projectName) => detect(projectName, {
    slashTabCompleted: (name) => 
      fromRegexp(slashTabCompletedProjectPath, name)(1),
    tabCompleted: (name) => 
      fromRegexp(tabCompletedProjectPath, name)(1),
    unchanged: (name) => name,
  }),
};
