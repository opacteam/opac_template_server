const express = require('express');
const app = express();
const template = require('./api');
app.use(express.json({ extended: false }));
app.use('/api', template);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});