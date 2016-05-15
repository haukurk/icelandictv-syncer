var config = require('config');
var Firebase = require('firebase');

var RUV = require('./channels/ruv.js');
var STOD2 = require('./channels/stod2.js');
var RUVITHROTTIR = require('./channels/ruvithrottir.js');
var SKJAR1 = require('./channels/skjar1.js');
var STOD2BIO = require('./channels/stod2bio.js');
var STOD2GULL = require('./channels/stod2gull.js');
var STOD3 = require('./channels/stod3.js');
var STOD2SPORT = require('./channels/stod2sport.js');
var STOD2SPORT2 = require('./channels/stod2sport2.js');

var Processor = require('./common/processor.js');

// Create root reference.
var myRootRef = new Firebase(config.get('firebaseConfig.uri'));
myRootRef.authWithPassword({
  email    : config.get('firebaseConfig.user'),
  password : config.get('firebaseConfig.password')
}, function(error, authData) {
  if (error) {
    console.log("Login Failed to Firebase!", error);
  } else {
    console.log("Authenticated successfully.");
  }
});

// Root reference for channels.
var channelsRef = myRootRef.child('channels');

// Set channel references
var ruvRef = channelsRef.child('ruv');
var ruvithrottirRef = channelsRef.child('ruvithrottir');
var stod2Ref = channelsRef.child('stod2');
var stod2bioRef = channelsRef.child('stod2bio');
var stod2gullRef = channelsRef.child('stod2gull');
var stod3Ref = channelsRef.child('stod3');
var stod2sportRef = channelsRef.child('stod2sport');
var stod2sport2Ref = channelsRef.child('stod2sport2');
var skjar1Ref = channelsRef.child('skjar1');

// Sync RUV
RUV.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  ruvRef.child('programmes').set(parsedprogrammes);
  ruvRef.child('title').set(title);
});

// Sync Stod 2
STOD2.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  stod2Ref.child('programmes').set(parsedprogrammes);
  stod2Ref.child('title').set(title);
});

// Sync RUV Iþróttir
RUVITHROTTIR.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  ruvithrottirRef.child('programmes').set(parsedprogrammes);
  ruvithrottirRef.child('title').set(title);
});

// Sync RUV Iþróttir
SKJAR1.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  skjar1Ref.child('programmes').set(parsedprogrammes);
  skjar1Ref.child('title').set(title);
});

// Sync RUV Iþróttir
STOD2BIO.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  stod2bioRef.child('programmes').set(parsedprogrammes);
  stod2bioRef.child('title').set(title);
});
// Sync RUV Iþróttir
STOD2GULL.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  stod2gullRef.child('programmes').set(parsedprogrammes);
  stod2gullRef.child('title').set(title);
});
// Sync RUV Iþróttir
STOD3.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  stod3Ref.child('programmes').set(parsedprogrammes);
  stod3Ref.child('title').set(title);
});
// Sync RUV Iþróttir
STOD2SPORT.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  stod2sportRef.child('programmes').set(parsedprogrammes);
  stod2sportRef.child('title').set(title);
});
// Sync RUV Iþróttir
STOD2SPORT2.GetData(function(programmes, title) {
  var parsedprogrammes = Processor.Process(programmes);
  // Update database in da cloud.
  stod2sport2Ref.child('programmes').set(parsedprogrammes);
  stod2sport2Ref.child('title').set(title);
});
