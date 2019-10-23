const {
  coreData,
  defaultView,
} = require('../../../settings');
const {getExports, fetchJSON, fetchRoutes} = require('../../json');
const applyHosts = require('../hosts/helpers');
const _ = require('./pug-helpers');

const applyAuth = (hosts, data) => {
  let {env} = hosts;
  const {asset, link} = hosts;
  const {auth} = data[''] || {};
  env = `${env};${auth || 'none'}`;
  return {asset, env, link};
};

const fetchView = (url, core, layoutData) => {
  const {view} = layoutData[''] || {};
  return view || defaultView;
};

const stripReserved = (dataFilename) => {
  if (/^_generators\//.test(dataFilename)) return defaultView;
  if (/^_core\//.test(dataFilename)) return defaultView;
  if (dataFilename.length < 1) return defaultView;
  return dataFilename;
};

const getEndpoint = (data) => {
  const {endpoint, endpoints, mode} = data;
  const [name] = Object.keys(endpoint);
  if (typeof endpoints[mode] !== 'object') return false;
  if (typeof endpoints[mode][name] !== 'function') return false;
  let endpointUrl = endpoints[mode][name]({link: '', ...endpoint[name]}).url;
  endpointUrl = endpointUrl.replace(/^\/api\//, '');
  return fetchRoutes(endpointUrl, (p) => ({error: `Endpoint ${p} failed`}), endpointUrl);
};

const renderEndpoints = async(data) => {
  if (!data[''].endpoint) return data;
  if (typeof data[''].endpoint !== 'object') return data;
  const endpoints = getExports('endpoints');
  const {env} = applyHosts;
  const [mode] = env.split(';');
  const endpointNames = Object.keys(endpoints[mode]);
  if (endpointNames.length === 0) return data;
  const {endpoint} = data[''];
  const endpointPayload = getEndpoint({endpoints, mode, endpoint});
  return Object.assign(data, endpointPayload);
};

const fetchBothRoutes = async(fileName, payload) => {
  const data = fetchRoutes(fileName, (p) => ({error: `No data for ${p}`}), payload);
  const routes = getExports('endpoints/routes');
  if (typeof routes !== 'function') return data;
  const parametrised = routes(payload.split('/'));
  if (Array.isArray(parametrised)) return data;
  return parametrised;
};

module.exports = async(payload) => {
  payload = payload.join('/');
  const fileName = stripReserved(payload);
  const core = fetchJSON(coreData, () => ({coreDataError: 'Not set'}));
  let data = await fetchBothRoutes(fileName, payload);
  data = Object.assign(core, data);
  const view = fetchView(fileName, core, data);
  let sysInfo = data[''] || {};
  sysInfo = Object.assign(sysInfo, {view});
  data = Object.assign(data, {'': sysInfo}, {_});
  data = await renderEndpoints(data);
  const envHelper = applyAuth(applyHosts, data);
  data = Object.assign(data, envHelper);
  return data;
};
