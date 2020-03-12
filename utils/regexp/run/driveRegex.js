const addMatchingData = (testObjects, it) =>
  testObjects.map( obj => ({
    matcher: 'plain',
    it: obj.it || it,
    i: obj.i,
    e: obj.e
  }));

module.exports = (dd, regexpFn, regexpObject) => {
  const [regexpName] = Object.keys(regexpObject);
  const regexp = regexpObject[regexpName];
  dd.drive(addMatchingData(regexpFn(regexp), regexpName));
};