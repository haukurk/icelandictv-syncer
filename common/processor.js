var moment = require('moment');
var _ = require('lodash');

var exports = module.exports = {};

/**
 * Process programmes with date as the key of each programme.
 * @param  {dictionary of programmes with key as full datetime} programmes all programmes to sync to firebase.
 * @return {dictionnary} return validated and parsed programmes in a dict.
 */
function processProgrammes(programmes) {
  var programmes_dict = {};
  _(programmes).forEach(function(value) {
    if(validateProgrammeEntry(value)) {
      programmes_dict[value.startTime] = value;
    }
    else {
      console.log("Programme did not pass validation: "+value);
    }
  });

  return programmes_dict;

}

/**
 * Validate if the programme is valid before sync.
 * @param  {[type]} programme object is information about the programme.
 * @return {boolean}           if valid true otherwise false.
 */
function validateProgrammeEntry(programme) {
  if(moment(programme.startTime).isValid())
    return true;
  return false;
}

exports.Process = processProgrammes;
