const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;
const ROOT = './'

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: ROOT });
 })