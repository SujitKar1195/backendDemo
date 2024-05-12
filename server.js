require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('welcome');
});
app.get('/jokes', (req, res) => {
  res.send('you are very funny');
});

app.listen(PORT, () => {
  console.log(`server: - ${PORT}`);
});
