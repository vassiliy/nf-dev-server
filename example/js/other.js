const $ = window.jQuery;
const handler = require('./utils/microcode');

$(document).ready(() => {
  const welcome = $('h1').text();
  console.log(welcome);
  $('h1').on('click', handler);
});
