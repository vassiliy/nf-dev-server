module.exports = (dd) => {
  dd.drive([
    {
      it: 'remove whitespace from beginning and end of a string',
      i: ['    hello         '],
      e: 'hello',
    },
    {
      it: 'remove repeating whitespace',
      i: ['   hello   world\nlorem  ipsum   dolor    sit amet\t\t\t'],
      e: 'hello world lorem ipsum dolor sit amet',
    },
  ]);
};