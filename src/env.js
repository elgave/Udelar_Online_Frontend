if ('something i will do later' === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}