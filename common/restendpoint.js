var request = require("request");

var exports = module.exports = {};

/**
 * Creates a HTTP requests an returns data with a callback.
 * @param  {http.request options}   opts ia rgw options object for http.request.
 * @param  {Function} cb   caLlback function that returns json parsed data
 * @return {[callback(data)]}
 */
function _HTTP(opts,cb) {
  request(opts, function(error, response, body) {
    cb(JSON.parse(body));
  });
}

exports.HTTP = _HTTP;
