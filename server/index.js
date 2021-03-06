const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);