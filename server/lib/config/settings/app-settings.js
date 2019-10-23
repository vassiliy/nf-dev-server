const filterKeys = require('./filter-keys');
const defaultKeys = require('./default-keys');

class AppSettings {
  constructor(data) {
    Object.assign(this, filterKeys(data, defaultKeys));
  }
}

module.exports = AppSettings;
