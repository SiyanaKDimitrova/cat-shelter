const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home', { layout: false });
   
});

app.get('/cats/addBreed', (req, res) => {
    res.render('addBreed', {layout: false})
})

app.listen(3000, console.log.bind(console, 'server runing on http://localhost:3000'));

