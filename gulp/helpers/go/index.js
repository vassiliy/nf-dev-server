const {watch} = require('gulp');
const browserSync = require('browser-sync').create();
const server = require('gulp-live-server').new('node_modules/@greenminds/nf-dev-server/server/server.js');
const {map} = require('../../../utils/list');
const {proxy} = require('./settings');
const reloadUpdated = require('./reload-updated');
const notify = require('./notify')(server, browserSync);

function reloadCopied() { return reloadUpdated('copy', browserSync)(); }
function reloadCSS() { return reloadUpdated('css', browserSync)(); }

const dataCore = async() => require('../../dataCore')();
const dataRoot = async() => require('../../dataRoot')();
const dataRoutes = async() => require('../../dataRoutes')();
const js = async() => require('../../js')();

module.exports = {
  dataCore,
  dataRoot,
  dataRoutes,
  js,
  notify,
  reloadCopied,
  reloadCSS,
  sync: () => {
    server.start();
    browserSync.init(proxy);
  },
  watch: (tuplesArr) => map(tuplesArr, (item) => watch(item[0], item[1])),
};
