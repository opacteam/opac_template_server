const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const port = 4444;

const prefix = `export const TEMPLATE =`;

const writeFile = (filename, content) => {
    fs.writeFile(filename, `${content}`,
        err => {
            if (err) {
                console.error(err);
            }
        });
}

const readFile = (fileName) => {
    fs.readFile(fileName, "utf8", function(err, data) {
        if (err) throw err;
        console.log(data)
        return data;
    });
}

app.get('/', (req, res) => {
    let obj = {};
    fs.readFile('template.txt', "utf8", function(err, data) {
        if (err) throw err;
        obj.template = data;
    });
    fs.readFile('theme.txt', "utf8", function(err, data) {
        if (err) throw err;
        obj.theme = data;
    });
    res.send(obj)
})
app.get('/template', (req, res) => {
    fs.readFile('template.txt', "utf8", function(err, data) {
        if (err) throw err;
        console.log(data)
        res.send(data)
    });
})

app.post('/template', (req, res) => {
    let json = req.body;
    let stringifyJson = JSON.stringify(json);
    writeFile('template.txt', stringifyJson)
})

app.get('/theme', (req, res) => {
    fs.readFile('theme.txt', "utf8", function(err, data) {
        if (err) throw err;
        console.log(data)
        res.send(data)
    });
})

app.post('/theme', (req, res) => {
    let json = req.body;
    let stringifyJson = JSON.stringify(json);
    writeFile('theme.txt', stringifyJson)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})


module.exports = app;