var exports = module.exports = {};

var REST = require('../common/restendpoint.js');

var _title = 'RÚV';

var _transferOption = {
    uri: 'http://apis.is/tv/ruv',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };

function _getJsonData(cb) {
  REST.HTTP(_transferOption,cb);
}

function _getData(cb) {
  _getJsonData(function(data) {
    cb(data.results,_title);
  });
}

exports.GetData = _getData;
