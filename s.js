var express = require('express');
var port = 3001;
var app = express();
var cors = require('cors');

//app.use(cors());

app.get("/:string", cors(), function(req, res) {
  res.json({
		value: 'You now got ' + req.params.string
	})
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
