const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const calc = require('./routes/calculator');

const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api',
    calc.router
);

app.listen(port, () => {
  console.log(`Nexton challenge server listening on port ${port}`)
})