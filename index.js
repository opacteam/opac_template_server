const express = require('express');
const app = express();
const template = require('./api');
app.use(express.json({ extended: false }));
app.use('/api', template);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('running port ' + PORT));