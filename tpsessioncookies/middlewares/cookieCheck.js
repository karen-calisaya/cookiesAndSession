module.exports = (req, res, next) => {
    if(typeof req.cookies !== "undefined"){
        if(req.cookies.trabajo){
            req.session.color = req.cookies.trabajo;
            res.locals.session = req.session.session
        }
        next()
    }
}