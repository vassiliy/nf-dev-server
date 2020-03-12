module.exports = (dd, that) => {
  dd.drive([
    {
      it: 'if there is no error on the stack, proceed as usual',
      i: [{lorem: 'ipsum'}],
      e: false,
    },
    {
      it: 'if there is an error on the stack, do something else',
      i: [{error: 'segmentation fault'}],
      e: true,
    },
  ]);
};
