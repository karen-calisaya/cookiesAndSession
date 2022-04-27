const {validationResult} = require('express-validator')
module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'express'
        })
    },
    processIndex: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            res.render('/');
        }else{
            res.render('/',{
                title: 'express',
                errors: errors.mapped()
            })
        }
    }
}