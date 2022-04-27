var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController');
const indexValidaciones = require('../validations/indexValidations')

/* GET home page. */
router.get('/', indexController.index);
router.post('/', indexValidaciones, indexController.processIndex);
module.exports = router;
