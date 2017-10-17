const express = require('express');

// const passportSetup = require('./config/passport-setup');

// import routes
const authRoutes = require('./routes/auth-routes');

const app = express();

// set up ejs view
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// homepage route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
