const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

if (process.env.NODE_ENV === 'production') {
  serveProductionMode();
} else {
  require('dotenv').config();
}
app.listen(port, () => console.log(`Listening on port ${port}`));

const version = require('./package.json').version;
console.log('VERSION = ' + version);
console.log('CONTACT_MAIL = ' + process.env.CONTACT_MAIL);

/* IMPL ******************************************************** */

function serveProductionMode() {
  console.log('NODE_ENV = production');
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
};