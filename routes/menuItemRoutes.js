const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


// POST Method to add a Menu Item
router.post('/', async (req,res)=>{
    try{
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})



// GET Method to get the Menu Item
router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data saved');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


// Parametrised API
router.get('/:taste', async (req,res)=>{
    try{
       const taste = req.params.taste; // Extract the workType from the URL parameter
       if(taste == 'sweet' || taste == 'sour' || taste == 'spicy'){
        const response = await MenuItem.find({taste});
        console.log('response fetched');
        res.status(200).json(response);
       } else{
        res.status(404).json({error: 'Invalid work type'});
       }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


module.exports = router;