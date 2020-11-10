if (require('../deploy')) {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}