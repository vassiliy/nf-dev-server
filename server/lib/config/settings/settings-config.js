const AppSettings = require('./app-settings');
const views = require('./views')(process.env.VIEWS);

class SettingsConfig {
  constructor() {
    this.settings = new AppSettings({
      env: 'development',
      workerPort: 3000,
      coreData: 'core/data',
      defaultView: 'default/index',
      notFoundData: '_core/404',
      asset: '//localhost:3001',
      link: '//localhost:3001',
      views,
    });
  }
}

const settingsConfig = new SettingsConfig();
module.exports = settingsConfig;
