module.exports = (dd) => {
  dd.drive([
    {
      it: 'given a string, make the first letter in each word uppercase',
      i: ['hello wOrld!'],
      e: 'Hello WOrld!',
    },
  ]);
};
