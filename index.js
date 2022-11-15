const express = require('express');
const app = express();
const template = require('./api');
app.use(express.json({ extended: false }));
app.use('/api', template);
app.listen(process.env.PORT || 3000, () => {
    console.log(`server started on port ${PORT}`);
});