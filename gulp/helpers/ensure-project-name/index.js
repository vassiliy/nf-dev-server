/*
* Function ensuring that gulp task wrapped inside it receives `-p` parameter
*/

const {getParam} = require('../../../utils/cli');
const wrapTask = require('./wrap-task');

module.exports = wrapTask(getParam('p'));
