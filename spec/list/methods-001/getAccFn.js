module.exports = (dd, that) => {
  dd.drive([
    {
      it: 'given a function, return it',
      i: [[], (hello) => { world; }],
      e: (hello) => { world; },
    },

    {
      matcher: 'plain',
      it: 'given an array as first argument, return concat',
      i: that.getAccFn([1, 2, 3]).name,
      e: 'concat',
    },

    {
      matcher: 'plain',
      it: 'given true as the second argument, return collectErrors',
      i: that.getAccFn({}, true).name,
      e: 'collectErrors',
    },

    {
      matcher: 'plain',
      it:  'otherwise return Object.assign',
      i: that.getAccFn(123456),
      e: Object.assign,
    },
  ]);
};
