module.exports = (dd) => {
    dd.drive([
        {
            it: 'given an array, act like reduce',
            i: [[1, 2, 3], 0, (item) => item, (acc, item) => acc + item],
            e: 6,
        },

        {
            it: 'given something else, convert it to an array and act like reduce',
            i: ['abc def ghi', '', (item) => item, (acc, item) => acc + item],
            e: 'abcdefghi',
        },
    ]);
};
