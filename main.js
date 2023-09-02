// import './css/medium.css'
// import './css/reset.css'
// import './css/small.css'
// import './css/style.css'

// Import all modules from the specified directories
const utilsModules = import.meta.glob('/src/utils/*.js');
const uxModules = import.meta.glob('/src/ux/*.js');
const web3Modules = import.meta.glob('/src/web3/*.js');
const dbModules = import.meta.glob('/src/db/*.js');

// Function to dynamically import modules from a directory
async function importModules(modules) {
  for (const path in modules) {
    await modules[path]();
  }
}

// Dynamically import all the modules
importModules(utilsModules);
importModules(uxModules);
importModules(web3Modules);
importModules(dbModules);
