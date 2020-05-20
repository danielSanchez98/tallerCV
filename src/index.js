const express = require('express'),
      path= require('path'),
      app= express(),
      cookieParser= require('cookie-parser'),
      cookieSession= require('cookie-session');


// Settings
app.set('port', 3000);
app.set('views', path.resolve(__dirname,'views'));
app.set('view engine','ejs'); 


// static files & middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(cookieSession({secret: "I'm a secret"}));



// Rutas

app.get('/',(req,res)=>{

    
    req.session.visitas || (req.session.visitas=0);
    let n=req.session.visitas++;
    console.log(`Has visitado la pagina principal ${n} veces`);
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
