const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World Beansys testing demo1 wewe sdwsdwd Mauala Approcves!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
