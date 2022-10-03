const express = require('express');
const app = express();

app.use(express.json());

app.post('/log', async (req, res) => {
    console.log(await req.body);
    res.sendStatus(200);
})

app.listen(5421, () => {
    console.log('Escutando logs')
})