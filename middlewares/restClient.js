var Client = require('node-rest-client').Client;

var client = new Client();

module.exports = function(){
    client.registerMethod("testMethod", "https://httpbin.org/ip", "GET");
    return client;

}