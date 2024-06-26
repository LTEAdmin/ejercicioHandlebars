const express = require('express');
const app = express();// require('./routes/routes.js');
const exphbs = require('express-handlebars');
const path = require("path");//
const port = process.env.PORT || 3003;

//static files
app.use(express.static('assets'));
app.use('/boot', express.static('node_modules/bootstrap/dist/css'));
app.use('jquery', express.static('node_modules/jquery/dist'));

//configuracion de HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views'));
app.engine('hbs', exphbs.engine({
    partialsDir: path.join(__dirname, 'views/partials'),
    extname: '.hbs',
  /*   defaultLayout:'main', */
}));

app.get('/home', (req, res) => {
    res.render('home', {
        title:':::: Home :::',
    })
});

app.get('/about', (req, res) => {
  res.render('about',{
    title:':::: About :::',
  }); 
});

app.get("/productos", (req, res) => {
  res.render("productos", {
      title: ":::: Productos :::",
      fotos:['img1','img2','img3']
  });
});                                                                    

app.get("*", (req, res) => {
  res.status(404).send("esta pagina no existe    ");
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});