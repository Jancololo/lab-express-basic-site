const express = require('express');
const app = express();
const port = 3000;

// this line is needed to register the public folder so that the content (all the 
// public assets is accesible in the browser)

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.listen(port, () => {
    console.log(`Example app listening at port ${port}`)
})