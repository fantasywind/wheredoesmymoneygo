
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.name = function (req, res) {
  var name = req.params.name;
  if(name == "feature")
  res.render('partials/test1');
  else
  req.render('partials/test2');
};