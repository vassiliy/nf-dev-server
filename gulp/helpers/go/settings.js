const {
  all,
  cssMarkup,
  jsMarkup,
  jsBundles,
  jsonCore,
  jsonRoutes,
  markupData,
  markupDataCore,
  mediaFiles,
  pugMarkup,
} = require('../folders');

module.exports = {
  all,
  coreData: [
    all(markupDataCore, 'js'),
  ],
  cssMarkup,
  jsMarkup,
  jsBundles,
  jsonCore,
  jsonRoutes,
  markupData,
  mediaFiles,
  notifyList: [
    all(cssMarkup, 'scss'),
    all(jsBundles, 'js'),
    all(jsonRoutes, 'json'),
    all(pugMarkup, 'pug'),
  ],
  notifyCoreList: [
    all(jsonCore, 'json'),
    `!${jsonCore}/data.json`,
  ],
  proxy: {
    proxy: 'localhost:3000',
    port: 3001,
  },
  pugMarkup,
  routesData: [
    all(markupData, 'js'),
    `!${all(markupDataCore)}`,
  ],
};
