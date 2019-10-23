const {settings} = require('../../config/settings/settings-config');
const {
  getMode,
  renderContent,
  renderView,
} = require('./methods-002');

const {
  defaultView,
} = settings;

module.exports = {
  fetchContent: (view, layoutData) => {
    const mode = getMode(layoutData);
    return {renderContent, renderView}[`render${mode}`](view, layoutData);
  },
  fetchView: (layoutData) => {
    const {view} = layoutData[''] || {};
    return view || defaultView;
  },
};
