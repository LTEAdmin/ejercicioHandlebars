const express = require('express');

const app = express();
const port = 3003;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html'); //('About Page');
});

app.get('*', (req, res) => {
    res.status(404).send('esta pagina no existe    ');
});

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});