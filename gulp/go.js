const {
  coreData,
  cssMarkup,
  jsMarkup,
  mediaFiles,
  notifyCoreList,
  notifyList,
  routesData,
} = require('./helpers/go/settings');
const {
  dataCore,
  dataRoot,
  dataRoutes,
  js,
  notify,
  reloadCopied,
  reloadCSS,
  sync,
  watch,
} = require('./helpers/go');

module.exports = async() => {
  sync();
  watch([
    [coreData, dataCore],
    [cssMarkup, reloadCSS],
    [jsMarkup, js],
    [mediaFiles, reloadCopied],
    [notifyCoreList, notify(dataRoot)],
    [notifyList, notify()],
    [routesData, dataRoutes],
  ]);
};
