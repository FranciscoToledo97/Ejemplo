const escape = require('escape-html');
const math = require('mathjs');

app.get('/', (req, res) => {
    const userInput = req.query.name;
    res.send(`<h1>Hello ${escape(userInput)}</h1>`);
});

app.get('/calc', (req, res) => {
    const expression = req.query.expr;
    const result = math.evaluate(expression);
    res.send(`Result: ${result}`);
});
