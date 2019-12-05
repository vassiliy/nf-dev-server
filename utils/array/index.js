/*
* Array utils
*/

module.exports = {
  format: (array, length, placeholder = '') => {
    if (array.length >= length) return array.slice(0, length);
    return array.concat(Array(length - array.length).fill(placeholder));
  },
};
