const express = require('express');
const app = express();
const port = 9080;

app.get('/', (req, res) => res.send('Hello World Beansys testing demo1 wewe sdwsdwd No Upload Approcves!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
