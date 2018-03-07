var Client = require('node-rest-client').Client;

var client = new Client();

module.exports = function(){
    client.registerMethod("testMethod", "http://201.38.172.82:8001/auth/login", "POST");
    return client;

}