const {generate} = require('@greenminds/nf-dev-server/server');

const view = 'news/item';
const title = 'Certain news page';
const item = generate('news_item')(5, 7, 9);

module.exports = {
  '': {view},
  title,
  item,
};
