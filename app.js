const express = require('express');
const path = require('path')
const app = express();
const port = 8080;

app.get('/', function (req, res) { 
    res.send('Get this message and take it!!')
    res.sendFile(path.join(__dirname, './index.html'))
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
