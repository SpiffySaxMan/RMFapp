var stormpath = require('stormpath')
var applicationHref = process.env['STORMPATH_APPLICATION_HREF'];
var app;

// Find the user's home directory (works on both Windows and *nix):
var home = process.env[(process.platform === 'win32' ? 'USERPROFILE' : 'HOME')];
var apiKeyFilePath = home + '/.stormpath/apiKey.properties';

// Will be available after the properties file is asynchronously loaded from
// disk:
var client;

stormpath.loadApiKey(apiKeyFilePath, function apiKeyFileLoaded(err, apiKey) {
  client = new stormpath.Client({ apiKey: apiKey });
});

var app = {
  name: 'RMFapp',
  description: "Roomate Finder App"
};

client.createApplication(app, { createDirectory: true }, function(err, createdApp) {
  console.log(createdApp);
});
