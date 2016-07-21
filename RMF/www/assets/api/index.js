var stormpath = require('stormpath')
var app;
var util = require ('util');

// Find the user's home directory (works on both Windows and *nix):
var home = process.env[(process.platform === 'win32' ? 'USERPROFILE' : 'HOME')];
var apiKeyFilePath = home + '/.stormpath/apiKey.properties';

// Will be available after the properties file is asynchronously loaded from
// disk:
var client;

console.log("before:");

var apiKey = new stormpath.ApiKey(
  process.env['STORMPATH_CLIENT_APIKEY_ID'],
  process.env['STORMPATH_CLIENT_APIKEY_SECRET']
);

var client = new stormpath.Client({ apiKey: apiKey });

console.log("after:");

var appHref = 'https://api.stormpath.com/v1/applications/KzUPEioLybUfu2YwUjb8o';

client.getApplication(appHref, function(err, app) {
  if (err) throw err;
  console.log(app);
});

client.getDirectories({ expand: 'groups' }, function(err, dirs) {
  dirs.each(function(dir, cb) {
    console.log(dir);
    cb();
  }, function(err) {
    console.log('Finished iterating over directories.');
  });
});
