const settingsConfig = require('../config/settings/settings-config');
const controller = require('./index');
const {routes} = require('./parse-route/or');

module.exports = {
  registerConfigRoute: (application) => {
    application.route('/config').get((req, res) => {
      res.status(200).json(settingsConfig.settings);
    });
  },

  registerRoutes: (application) => {
    routes.forEach((route) => application.route(route).all(controller));
  },
};
