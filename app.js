//http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#listGroupsForUser-property

const express = require('express');

const aws = require('aws-sdk');

//credentials
const users = require('./config/user')
//const keys = require('./config/keys');
// var config = new aws.Config({
//   accessKeyId: keys.admin_iam.aws_access_key_id,
//   secretAccessKey: keys.admin_iam.aws_secret_access_key
// });
// aws.config.credentials = config;

var credentials = new aws.SharedIniFileCredentials({profile: 'admin'});
aws.config.credentials = credentials;
const iam = new aws.IAM();

if (typeof Promise === 'undefined'){
  aws.config.setPromiseDependency(require('bluebird'));
  console.log('had to use bluebird');
}
else{
  console.log('global promise was found!')
}

// const passportSetup = require('./config/passport-setup');

// import routes
const authRoutes = require('./routes/auth-routes');

const app = express();

// var params =
// {
//   UserName: 'Bob'
//   //Path: '/'
// };

for(var i in users){
  console.log(i)
// iam.createUser(i, function(err, data){
//    if (err) console.log(err, err.stack); // an error occurred
//    else     console.log(data);           // successful response
// });
}
// CREATING USER
// iam.createUser(params, function(err, data){
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

// LISTING USER
par = {};
iam.listUsers(par, function(err, data){
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

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

//console.log(keys.admin_iam.aws_access_key_id)
