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

client.getDirectory('https://api.stormpath.com/v1/directories/13tj6f50q7jJ7WvDu6SxHa', callback);

var account = {
  username: 'example',
  email: 'example@gmail.com',
  password: 'Changeme!'
};

createdApp.createAccount(account, function(err, createdAccount) {
  console.log(createdAccount);
});
