const apiData = require('../data/dev-api');
const data = require('../data');
const {
  fetchContent,
  fetchView,
} = require('./methods-001');

module.exports = {
  json: (payload) => apiData(payload),
  html: async(payload) => {
    const layoutData = await data(payload);
    const view = fetchView(layoutData);
    const html = fetchContent(view, layoutData);
    return html;
  },
};
