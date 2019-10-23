module.exports = {
  dist: {
    js: 'jsBundles',
    json: {
      '': 'json',
      core: 'jsonCore',
      routes: 'jsonRoutes',
    },
  },
  project: {
    '': 'markup',
    data: {
      '': 'markupData markupDataRoutes',
      _core: 'markupDataCore',
      _generators: 'markupDataGenerators',
    },
    js: 'jsMarkup',
    pug: 'pugMarkup',
    sass: 'cssMarkup',
  },
};
