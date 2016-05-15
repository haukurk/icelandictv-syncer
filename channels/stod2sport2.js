var exports = module.exports = {};

var REST = require('../common/restendpoint.js');

var _title = 'Stöð 2 Sport 2';

var _transferOption = {
    uri: 'http://apis.is/tv/stod2sport2',
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
