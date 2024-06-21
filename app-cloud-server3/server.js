const express = require('express');
const cors = require('cors');
// const list = require('./list3');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 7003;

app.use(cors({ origin: 'http://localhost:3000' }));

// app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the server three of the combined HCCS.');
});

// app.get('/api/list', (req, res) => {
// res.json(list);
// });

app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'list.html'));
});

app.listen(PORT, () => {
  console.log(`HCCS server 3 running on port ${PORT}`);
});
