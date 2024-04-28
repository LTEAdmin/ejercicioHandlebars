const express = require('express');
const app = express();// require('./routes/routes.js');
const exphbs = require("express-handlebars");
const path = require("path");//
const port = process.env.PORT || 3003;

//configuracion de HBS
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '/views'));
app.engine('hbs', exphbs.engine({
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

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});