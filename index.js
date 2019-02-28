const express = require('express');
const exphbs = require('express-handlebars');
const posts = require('./Posts');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Posts',
        posts
    });
});

app.post('/', (req, res) => {
    const newPost = {
        id: req.body.id,
        title: req.body.title,
        msg: req.body.msg
    }
    posts.push(newPost);

    res.redirect('/');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
