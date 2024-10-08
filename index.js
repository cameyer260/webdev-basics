const { readFile } = require("fs").promises;
const express = require("express");

const app = express();

app.use(express.static('public'));

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8'));
});

app.listen(3000, () => console.log("App available on http://localhost:3000"));