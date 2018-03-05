module.exports = function(app) {
  var restClient = require('../middlewares/restClient');
  var homeController = {
    index: function(req, res) {
      res.render("index");
    },
    test: function(req, res) {
        restClient().methods.testMethod(function(data, response) {
            // parsed response body as js object
            console.log(data);
            // raw response
            console.log(response);
          });;
      res.render("index");
    }
  };
  return homeController;
};
