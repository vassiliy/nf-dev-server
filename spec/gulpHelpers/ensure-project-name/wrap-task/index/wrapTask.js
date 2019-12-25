

const fakeTask = (projectName) => `Hello, ${projectName}!`;

module.exports = async (dd, that) => {

  dd.drive([
    {
      matcher: 'plain',
      it: 'supports further specs async calling',
      i: 1,
      e: 1,
    },
  ]);

  const validProjectNameResult = await that('projects/hello/world')(fakeTask)();
  let invalidProjectNameResult;
  try {
    await that(undefined)(fakeTask)();
  } catch (e) {
    invalidProjectNameResult = 1;
  }

  dd.context( 'Returns a function which accepts a task and runs it if the '
             +'project name is correct (projectName)',  () => {
    
    dd.context('with valid -p option given',  () => {
      
      dd.drive([
        {
          matcher: 'plain',
          it: 'run the given task with the project name as argument',
          i: validProjectNameResult,
          e: `Hello, hello/world!`,
        },
      ])
    });

    dd.context('without -p option given',  () => {
      dd.drive([
        {
          matcher: 'plain',
          it: 'throws error: Project name `-p` parameter is mandatory.',
          i: invalidProjectNameResult,
          e: 1,
        },
      ])
    });

  });
};