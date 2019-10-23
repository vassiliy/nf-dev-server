const {dest} = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const pugify = require('pugify');
const es = require('event-stream');
const source = require('vinyl-source-stream');
const {dist, project} = require('./helpers/folders');
const {destList, transform} = require('./helpers/js');

module.exports = async() => {
  const tasks = destList(`./${project}/js`).map((entry) => browserify({
    entries: [entry],
    debug: true,
  })
    .transform(babelify, {presets: ['@babel/preset-env']})
    .transform(pugify)
    .bundle()
    .on('error', (err) => { console.error('error is', err); })
    .pipe(source(transform(project, entry)))
    .pipe(dest(dist)));
  return es.merge.apply(null, tasks);
};
