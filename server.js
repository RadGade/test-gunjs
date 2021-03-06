const express = require('express');
const fetch = require('node-fetch');
const gun = require('gun');

const XIRSYS_URL = process.env.XIRSYS_URL;

const app = express();

app.use(gun.serve);
app.use(express.static('public'));

app.get('/turn', async function(req, res) {
    const content = JSON.stringify({ format: 'urls' });
    const headers = { 'Content-Type': 'application/json' };
    const _res = await fetch(XIRSYS_URL, { method: 'PUT', body: content, headers });
    const data = await _res.json();
    res.json(data.v);
});

const server = app.listen(process.env.PORT || 3000);
const {} = gun({ file: 'data', web: server });
