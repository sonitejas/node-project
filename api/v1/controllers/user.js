export default {
    welcome: (req, res) => {
        res.render('index', { title: 'Express' });
    }
}