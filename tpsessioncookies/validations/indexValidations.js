const {check} = require('express-validator');
 let indexValidaciones = [
    check('name')
        .notEmpty().withMessage('Campo requerido'),
    check('color')
        .notEmpty().withMessage('Debes elegir un color'),
    check('email')
        .notEmpty().withMessage('debe escribir un email').bail()
        .isEmail().withMessage('Debes escribir un email correcto'),
    check('edad')
        .isNumeric().withMessage('Debes usar números')
 ] 

module.exports = indexValidaciones;