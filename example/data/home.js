const {asset, link} = require('@greenminds/nf-dev-server/server');

module.exports = {
  '': {
    content: 'home',
    view: 'default/content',
  },
  title: 'Home content page',
  homePic: asset('/images/bone-wagon-square.jpg'),
  aboutLink: link('/about'),
};
