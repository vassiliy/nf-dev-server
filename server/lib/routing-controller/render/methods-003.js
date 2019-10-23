module.exports = {
  indentContent: (content) => `  ${content.split('\n').join('\n  ')}`,
  extendLayout: (view, content) => `
extends /${view}
block content
${content}`,
};
