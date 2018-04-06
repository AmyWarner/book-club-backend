var express = require('express');
var router = express.Router();
var request = require ('request');

/* GET book listing. */
router.get('/', function(req, res, next) {
  var searchTerms = req.query.booksearch
  var url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`
  request (url, function(error, response, body){
      res.send(JSON.stringify(body));
})
});

module.exports = router;