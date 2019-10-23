const {src, dest} = require('gulp');
const {json, markupData} = require('./helpers/folders');

const endpoints = `${markupData}/_generators/endpoints/**/*`;

module.exports = async() => {
  src(endpoints, {allowEmpty: true})
    .pipe(dest(`${json}/endpoints`));
};
