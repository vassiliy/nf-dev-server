module.exports = {
  env: (hostsObject) => {
    const {asset, link, apiHost} = hostsObject;
    if (!apiHost) return `proto;${asset};${link}`;
    return `backend;${asset};${link};${apiHost}`;
  },
};
