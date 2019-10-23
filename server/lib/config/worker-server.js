const bodyParser = require('body-parser');
const http = require('http');
const express = require('express');
const path = require('path');
const routeConfig = require('../routing-controller/config');
const settingsConfig = require('./settings/settings-config');

const {workerPort} = settingsConfig.settings;

class WorkerServer {
  createWorker() {
    const application = express();
    this.configureWorker(application);
    return this.startServer(application);
  }

  configureWorker(application) {
    this.configureApplication(application);
    this.configureRoutes(application);
  }

  configureApplication(application) {
    application.use(bodyParser.json());
    application.use(express.static(path.join(process.cwd(), 'dist')));
  }

  configureRoutes(application) {
    routeConfig.registerConfigRoute(application);
    routeConfig.registerRoutes(application);
  }

  startServer(application) {
    const server = http.createServer(application);

    server.listen(
      workerPort,
      () => {
        console.log(`Listening on ${workerPort}`);
      }
    );

    return server;
  }
}

module.exports = WorkerServer;
