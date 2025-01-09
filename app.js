const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');

// import path,{ dirname } from "path";
// import { fileURLToPath } from "url";
// const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app=express();
const port=3000;
const posts=("data/posts.json");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(expressEjsLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs');

app.use('/',require('./server/route/main'))

app.listen(port,(req,res)=>{
    console.log(`Listening to http://localhost:${port}`);
})