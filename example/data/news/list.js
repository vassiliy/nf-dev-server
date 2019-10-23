const view = 'news/index';
const title = 'News list title';
const {asset, generate} = require('@greenminds/nf-dev-server/server');

const news = [...Array(12).keys()]
  .map((i) => generate('news_item')(
    i + 1,
    `title #${i + 1}`,
    `content #${i + 1}`
  ))
  .map((newsItem) => Object.assign(newsItem, {image: asset(newsItem.image)}));

module.exports = {
  '': {view},
  title,
  news,
};
