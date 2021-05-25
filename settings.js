const {join} = require('path');

const VIEWS = join(__dirname, '/views');
const STATICS = join(__dirname, '/statics');
const DATABASE = join(__dirname, '/db');

module.exports = {VIEWS, STATICS, DATABASE};