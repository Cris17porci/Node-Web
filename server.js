const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
    // Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
});

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Cristobal'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Cristobal'
    });
})

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});