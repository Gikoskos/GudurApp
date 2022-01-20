const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/v1/status', (_, res) => {
  res.send('GudurApp is healthy!');
});

app.listen(port, () => {
  console.log(`GudurApp listening at http://localhost:${port}`);
});
