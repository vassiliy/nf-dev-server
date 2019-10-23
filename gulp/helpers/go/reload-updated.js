/*
* Wrapper calling `browserSync.reload()` on given `gulp` task completion
*/

module.exports = (task, browserSync) => async() => {
  await require(`../../${task}`)(); //eslint-disable-line
  browserSync.reload();
};
