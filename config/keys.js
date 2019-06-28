
const dev_consts = require('./constants');

module.exports = {
  mongoURI: 'mongodb://' + dev_consts.MONGO_URI_USER + ':' + dev_consts.MONGO_URI_PW + '@ds135619.mlab.com:35619/' + dev_consts.MONGO_URI_DB,
  secretOrKey: 'secret'
};
