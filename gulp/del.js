const del = require('del');
const {dist} = require('./helpers/folders');

module.exports = async() => del(`${dist}/`);
