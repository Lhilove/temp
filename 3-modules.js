// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative flavor.js')
require('./7-mind-grenade')


sayHi('adeyemi')
sayHi(names.john)
sayHi(names.bolade)
