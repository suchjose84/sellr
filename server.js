const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200',
    origin: 'https://master.d2h1yeujaswaeo.amplifyapp.com/'
}));

//connects to auth0
// app.use(auth(authConfig.config));

//connect to routes folder
app.use('/', require('./routes'));

//connect to db
const db = require('./models');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to the database and server running on port ${port}.`);
    });
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
});
