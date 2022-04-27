var express = require('express');
var router = express.Router();
const indexValidaciones = require('../validations/indexValidations')

/* GET home page. */
router.get('/', indexValidaciones, function(req, res, next) {
  res.render('index', {
     title: 'Express' 
    });
});

module.exports = router;
