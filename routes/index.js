var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})


// accept POST request on the homepage
// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

// accept PUT request at /user
// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// accept DELETE request at /user
// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });


module.exports = router;
