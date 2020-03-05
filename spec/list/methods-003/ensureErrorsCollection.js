module.exports = (dd) => {
  dd.context('Get an array of errors from given object', () => {
    dd.drive([
      {
        it: 'returns object.error if it\'s already an array',
        i: [{error: ['segmentation fault', 500]}],
        e: ['segmentation fault', 500],
      },

      {
        it: 'if object.error is a string, return a 1-element array with it',
        i: [{error: 'segmentation fault'}],
        e: ['segmentation fault'],
      },

      {
        it:  'returns an empty list otherwise',
        i: [{hello: 'world'}],
        e: [],
      }
    ]);
  });
};