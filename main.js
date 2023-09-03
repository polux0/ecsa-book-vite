// Import all modules from the specified directories
const utilModules = import.meta.glob('./util/*.js');
const uxModules = import.meta.glob('./ux/*.js');
const web3Modules = import.meta.glob('./web3/*.js');
const dbModules = import.meta.glob('./db/*.js');

// Function to dynamically import modules from a directory
async function importModules(modules) {
  for (const path in modules) {
    try {
      await modules[path]();
    } catch (error) {
      console.error(`Error importing ${path}:`, error);
    }
  }
}

// Dynamically import all the modules
importModules(utilModules);
importModules(uxModules);
importModules(web3Modules);
importModules(dbModules);
