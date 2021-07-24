const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World Beansys testing demo1 wewe sdwsdwd!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
