const express = require('express');

const port = process.env.PORT || 3010;
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
