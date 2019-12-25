const fakeTask = (projectName) => `Hello, ${projectName}!`;

module.exports = (dd) => {
  dd.context( 'Returns a function which accepts a task and runs it if the '
             +'project name is correct(projectName)', () => {
    // How do I test a higher-order function?
    
    // dd.context('with valid project name given', () => {
    //   dd.drive([
    //     {
    //       it: 'return a function that will run the task',
    //       i: ['projects/hello/world'],
    //       e: {equals: f => (f(fakeTask) == 'hello/world')},
    //     },
    //   ])
    // });
  });
};