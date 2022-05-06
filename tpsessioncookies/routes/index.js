var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController');
const indexValidations = require('../validations/indexValidations');

/* GET home page. */
router.get('/', indexController.index);
router.post('/', indexValidations, indexController.processIndex);
router.get('/cerrar-session', indexController.sessionDestroy);

module.exports = router;
