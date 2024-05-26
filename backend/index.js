require('dotenv').config() ;
const mongoose = require('mongoose') ;
const express = require('express') ;
const authRouter = require('./routes/authRoute') ;

mongoose.connect("mongodb://127.0.0.1:27017/RH_ApplicationDB") ;
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(express.static('public'));


app.use('/api', authRouter);



app.listen(PORT, () => console.log('SERVER RUNNING ON PORT', PORT));