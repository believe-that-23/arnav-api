// const express = require('express');
// const {connectToDB} = require ('./config/db');
import express from 'express';
import { connectToDB } from './config/db.js';
import router from './src/job.routes.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json()); // IMPORTANT HAI
app.use('/', router);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    connectToDB();
})