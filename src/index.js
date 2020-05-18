const express = require('express'),
      path= require('path'),
      app= express(),
      cookieParser= require('cookie-parser'),
      cookieSession= require('cookie-session');


// Settings
app.set('port', 3000);
app.set('views', path.resolve(__dirname,'views'));
app.set('view engine','ejs'); 


// static files
app.use(express.static(path.join(__dirname, 'public')));



// Rutas

app.get('/',(req,res)=>{

    res.render('index');

});

app.get('/acerca',(req,res)=>{
    res.render('acercaDeMi');

});

app.get('/experiencia',(req,res)=>{
    res.render('experiencia');

});

app.get('/educacion',(req,res)=>{
    res.render('educacion');

});

app.get('/idiomas',(req,res)=>{
    res.render('idiomas');

});

app.get('/aptitudes',(req,res)=>{
    res.render('aptitudes')

});

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);

});
