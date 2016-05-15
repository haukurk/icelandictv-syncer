var exports = module.exports = {};

var REST = require('../common/restendpoint.js');

var _title = 'Skjár 1';

var _transferOption = {
    uri: 'http://apis.is/tv/skjar1',
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
