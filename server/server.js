const WorkerServer = require('./lib/config/worker-server.js');

const workerServer = new WorkerServer();
const server = workerServer.createWorker();
module.exports = server;
