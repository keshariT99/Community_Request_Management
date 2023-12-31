const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Import routes
const postRoutes = require('./routes/Posts');

//App middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL ='mongodb+srv://ktennakoon2018:997090667@requests.ii7chwp.mongodb.net/requests?retryWrites=true&w=majority';
mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});