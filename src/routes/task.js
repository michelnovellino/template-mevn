const express = require('express');
const router = express.Router();
const Task = require("../models/task");

router.get('/',async (req,res)=>{ 
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/',async (req,res)=>{ 
    console.table(req.body);
});

module.exports = router;