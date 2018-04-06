var express = require('express');
var router = express.Router();
var users = {
  Calvin:{
    age:50,
    shoeSize:15,
    hairColour:'Black'
  },
  Amy:{
    age:20,
    shoeSize:6,
    hairColour:'Black'
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(users));
});

module.exports = router;
