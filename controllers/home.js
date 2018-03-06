module.exports = function(app) {
  var restClient = require("../middlewares/restClient");
  var homeController = {
    index: function(req, res) {
      res.render("index");
    },
    test: function(req, res) {
      args = {
        headers: { "Content-Type": "application/json" },
        data: {
         "username": "admin",
          "password": "123"
        }
      };
      restClient().methods.testMethod(args,function(data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response.body);
      });
      res.render("index");
    }
  };
  return homeController;
};
