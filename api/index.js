const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const router = express.Router();
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
router.get('/template', (req, res) => {

    fs.readFile('../template.txt', "utf8", function(err, data) {
        if (err) throw err;
        console.log(data)
        res.send(data)
    });
})

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/upload', (req, res) => {

    let json = req.body;
    let stringifyJson = JSON.stringify(json);
    writeFile('template.txt', stringifyJson)
})

module.exports = router;