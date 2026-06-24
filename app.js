const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const userInput = req.query.name;

    res.send(`<h1>Hello ${userInput}</h1>`);
});

app.get('/calc', (req, res) => {
    const expression = req.query.expr;
    const result = eval(expression);
    res.send(`Result: ${result}`);
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});

