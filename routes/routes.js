/* const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();


//configuracion de HBS
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '/views'));
app.engine('handlebars', exphbs.engine({
    defaultLayout:'main',
}));

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about'); 
});

app.get("*", (req, res) => {
  res.status(404).send("esta pagina no existe    ");
});

module.exports = app;  */
