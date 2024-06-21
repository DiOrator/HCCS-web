const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 7001;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the server one of the combined HCCS.');
});

app.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'list.html'));
});

app.listen(PORT, () => {
  console.log(`HCCS server 1 running on port ${PORT}`);
});
