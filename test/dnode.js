var fs = require('fs')
  , dnode = require('dnode')
  , twigSource = fs.readFileSync('./twig.dev.js', 'UTF-8')
  , window = {};
var server = dnode(function (remote, conn) {
    this.render = function (source, parameters, cb) {
      eval(twigSource + source);
      cb(window.Twig.render(test, parameters));
    };
});
server.listen(7070);
