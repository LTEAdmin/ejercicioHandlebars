/* const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();


//configuracion de HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views'));
app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
}));

app.get("/", (req, res) => {
  res.render('home');
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html"); //('About Page');
});

app.get("*", (req, res) => {
  res.status(404).send("esta pagina no existe    ");
});

module.exports = app; */
