const fs = require('fs');
const pug = require('pug');
const paths = require('../paths');
const {
  indentContent,
  extendLayout,
} = require('./methods-003');

const basedir = paths.basedir();

module.exports = {
  getMode: (layoutData) => {
    if (!layoutData['']) return 'View';
    if (typeof layoutData[''] !== 'object') return 'View';
    if (typeof layoutData[''].content !== 'string') return 'View';
    return 'Content';
  },
  renderContent: (view, layoutData) => {
    const {content} = layoutData[''];
    let contentPug = fs.readFileSync(paths.content(content), 'utf8');
    contentPug = indentContent(contentPug);
    contentPug = extendLayout(view, contentPug);
    const html = pug.render(contentPug, {basedir, ...layoutData});
    return html;
  },
  renderView: (view, layoutData) => pug.renderFile(paths.view(view), layoutData),
};
