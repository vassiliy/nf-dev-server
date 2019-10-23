module.exports = {
  lintFix: (project) => `npm run lint:js -- projects/${project} `
    + `--ignore-pattern projects/${project}/vendors `
    + `--ignore-pattern projects/${project}/files `
    + '--fix || true',
};
