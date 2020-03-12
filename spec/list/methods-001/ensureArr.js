module.exports = (dd) => {
  dd.drive([
    {
      it: 'given an array, return it',
      i: [[1, 2, 3]],
      e: [1, 2, 3],
    },

    {
      it: 'given a string, convert it to a literal',
      i: ['public static void main'],
      e: ['public', 'static', 'void', 'main'],
    },

    {
      it:  'given an object, return its keys',
      i: [{lorem: 1, ipsum: 2}],
      e: ['lorem', 'ipsum'],
    },

    {
      it:  'otherwise return []',
      i: [42],
      e: [],
    },
  ]);
};
