const express = require('express');
const app = express();

app.post('/log', (req, res) => {
    console.log(req.data);
    res.sendStatus(200);
})

app.listen(5421, () => {
    console.log('Escutando logs')
})