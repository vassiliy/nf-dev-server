const helpers = require('./helpers');

const {setStructure} = helpers;

const dist = 'dist';
const project = process.env.FROM || 'one/two';
const base = {dist, project, ...helpers};

module.exports = setStructure(base);
