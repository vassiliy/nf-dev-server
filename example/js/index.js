const $ = window.jQuery;
const newsItem = require('../pug/components/news/item.pug');
const handler = require('./utils/microcode');

$(document).ready(() => {
  const welcome = $('h1').text();
  console.log(welcome);
  const rendered = newsItem({
    item: {
      'id': 3,
      'title': 'The title of news item #3',
      'content': 'The content of news item #3',
      'image': '/images/news/#3',
    },
  });
  // $('div.col-sm-8.text-left').append(rendered);
  console.log(rendered);
  $('p').on('click', handler);
});
