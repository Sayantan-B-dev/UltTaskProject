const express = require("express");
const router=express.Router();

router.get("/", (req,res) => {
    res.render('layouts/main',{content:'index'});
});
router.get("/about", (req, res) => {
    res.render('layouts/main',{content:'about'}); 
});
router.get('/posts', (req, res) => {
    res.render('layouts/main',{content:'posts'});
});
router.get('/contact', (req, res) => {
    res.render('layouts/main',{content:'contact'});
});
module.exports=router;


