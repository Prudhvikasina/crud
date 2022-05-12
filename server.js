const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/crud'));
app.get('/*', function(_req, res)
    { res.sendFile(path.join(__dirname + '/dist/crud')); });
app.listen(process.env.PORT || 8000);