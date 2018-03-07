var restClient = require("../middlewares/restClient");
var authService = require("../middlewares/authService");
module.exports = function(app) {
  var homeController = {
    index: function(req, res) {
      res.render("index");
    },
    test: function(req, res) {
      args = {
        headers: { "Content-Type": "application/json" },
        data: {
          username: "admin",
          password: "123"
        }
      };
      restClient().methods.testMethod(args, function(data, response) {
        // parsed response body as js object
        console.log(data);
        req.session.token = data.access_token;
        req.sessionOptions.maxAge = data.expires_in;
          console.log(req.sessionOptions.maxAge);
      });
      res.render("index");
    }, 
    login:{},
    logout:{}
  };
  return homeController;
};
