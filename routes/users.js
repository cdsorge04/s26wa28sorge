var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (var1 > var2) {
    var1 = var1 - var2;
  } else {
    var2 = var2 - var1;
  }

  res.send(`Values are: ${var1} and ${var2}`);
});

module.exports = router;

let var1 = 10;
let var2 = 15;