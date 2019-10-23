const detect = require('../../../../utils/detect');

module.exports = {
  invalid: (projectName) => typeof projectName !== 'string',
  extract: (projectName) => detect(projectName, {
    slashTabCompleted: (name) => {
      if (/^projects[/\\]{1}.+[/\\]{1}$/.test(name)) return name.slice(9, -1);
      return false;
    },
    tabCompleted: (name) => {
      if (/^projects[/\\]{1}.+[^/\\]{1}$/.test(name)) return name.slice(9);
      return false;
    },
    unchanged: (name) => name,
  }),
};
