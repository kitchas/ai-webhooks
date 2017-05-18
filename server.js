var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/', upload.array(), function (req, res, next) {
  console.log(req.body);
  var myresp = JSON.parse(JSON.stringify(req.body));

  //myresp.lang ="tm";
  
  myresp.result.fulfillment.speech="Hi there!!";
  myresp.result.fulfillment.messages[0].speech="Hi there!!";
  res.json(myresp);
});

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})