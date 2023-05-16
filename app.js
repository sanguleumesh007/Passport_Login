const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const mongoose=require('mongoose');
const app=express();




// Connect to MongoDB
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "umesh",
//   password: "User@123",
//   db :'misc'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });





//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//Body Parser
app.use(express.urlencoded({ extended :false}));

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));


const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`server is started on ${PORT}`));