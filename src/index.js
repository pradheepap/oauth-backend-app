var request = require("request");

var options = { method: 'POST',
  url: 'https://healthexpress.au.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"Q9hH8R9S2ZwwGjj1XCJfAtVOMWBfE0A1","client_secret":"secret","audience":"https://healthexpress.au.auth0.com/api/v2/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});