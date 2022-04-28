const {validationResult} = require('express-validator')
const {users, writeUsers} = require('../data/data');

module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'express'
        })
    },
    processIndex: (req, res) => {
        let newUser = {
            name,
            email,
            color,
            edad
        } = req.body

        let errors = validationResult(req);
        if(errors.errors.length > 0){
            res.render('index', {
                errors: errors.mapped(),
                title: "express",
                old: req.body
            });
            
        } else {
            res.render('hola', {
                title: 'hola',
                newUser
            })
        }
       
        /* if(errors.isEmpty()){
            let lastId = 0;
            users.forEach(user => {
                if(user.id > lastId ){
                    lastId = user.id
                }
            });
            let newUser = {
                id: lastId + 1,
                name: req.body.name,
                email: req.body.email,
                color: req.body.color,
                edad: req.body.edad
            }
            users.push(newUser)
            writeUsers(users)
           res.send('te has registrado con exito'); 


        }else{
            res.send('hola')
        } */
    }
}