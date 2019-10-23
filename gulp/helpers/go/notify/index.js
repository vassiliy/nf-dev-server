const {ensure, setName} = require('../../../../utils/fn');
const {extractName} = require('./methods-001');

module.exports = (server, browserSync) => (fn) => {
  const handler = async(file) => {
    await server.notify.apply(server, [file]);
    await ensure(fn)();
    browserSync.reload();
  };
  const name = extractName(fn);
  return setName(handler, name);
};
