const express = require('express');
const routes = require('../Ejercicio Handlebars/routes/routes.js');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3003;

//configuracion de HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views'));


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});