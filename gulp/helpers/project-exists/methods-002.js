module.exports =  {
	checkFolder: (fs) => (projectsPath) => (projectName) => {
	  let folderList;
	  try {
			folderList = fs.readdirSync(projectsPath);
	  } catch (e) {
			folderList = [];
	  }
	  return folderList.indexOf(projectName) > -1;
	},
};
