const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 7002;
const path = require('path');

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.get('/', (req, res) => {
  res.send('This is the server two of the combined HCCS.');
});

app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'list.html'));
});

app.listen(PORT, () => {
  console.log(`HCCS server 2 running on port ${PORT}`);
});
