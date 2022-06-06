//express
const express = require('express');

//cors
const cors = require('cors');

//mongoose
const mongoose = require('mongoose');

//dotenv
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
//db access
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection;

connection.once('open', () => {
   console.log('MongoDB database connection established successfully')
});

app.use(express.json());


const ExcerciseRoute = require('./routes/excercise');
const UsersRoute = require('./routes/user');

app.get('/', (req, res) => {
    res.send('server listning..')
});

app.use('/excercises', ExcerciseRoute);
app.use('/users', UsersRoute);



app.listen(port, () =>{
    console.log(`server listning to : ${port}`);
})