const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const port = process.env.PORT;
const app = express()

// todo: require('hbs')
//HANDLEBARS

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático -> Si hay una ruta con ese funcionamiento, el public tiene
//más prioridad que lo definido debajo
//app.use(express.static('public'));
app.use(express.static('public'))


app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'Miquel',
        titulo:'Curso de Node'
    });
});
app.get('/generic', (req,res)=>{
    res.render('generic', {
        nombre: 'Miquel',
        titulo:'Curso de Node'
    });
});
app.get('/elements', (req,res)=>{
    res.render('elements', {
        nombre: 'Miquel',
        titulo:'Curso de Node'
    });
});
//app.get('/generic', (req,res)=>{
//    res.sendFile(__dirname+`/public/generic.html`);
//})


app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo, estamos en la nueva ruta')
  });

//app.get('*', function (req, res) {
//    res.sendFile(__dirname+'/public/404.html');
//  });

//app.listen(port, ()=>{
//    console.log(`Server up and running at port ${port}`);
//})
app.listen(port, ()=>{
    console.log(`Server up and running at port ${port}`);
})