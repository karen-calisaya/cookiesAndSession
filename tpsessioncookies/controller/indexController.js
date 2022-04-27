module.exports = {
    index: (req, res) => {
        res.redirect('index', {
            title: 'Express'
        });
    },
    processIndex: (req, res) => {
        res.redirect('index')
    }
}