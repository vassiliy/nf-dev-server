const folders = require('./structure');

const {all, markup, projectPath} = folders;

module.exports = Object.assign(folders, {
  mediaFiles: [
    all(`${markup}/files`),
    all(`${markup}/fonts`),
    all(`${markup}/images`),
    all(`${markup}/vendors`),
    all(`${markup}/videos`),
    `${markup}/favicon.ico`,
  ],
  reqProject: (project, pathName) => projectPath(`../../../../../projects/${project}`, pathName),
});
