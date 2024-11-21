const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

// POST route to add a person
router.post('/', async (req,res)=>{
    try{
    const data = req.body; // Assuming the request body contains the person data
    
    // Create a new person document using the Mongoose model
    const newPerson = new Person(data);

    // Save the new person document to the database
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
        }
 catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


// GET method to get the person
router.get('/', async (req,res)=>{
    try{
        const data = await Person.find();
        console.log('data saved');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


// Parametrised API
router.get('/:workType', async (req,res)=>{
    try{
       const workType = req.params.workType; // Extract the workType from the URL parameter
       if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
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


// UPDATE method to update the person
// variable name - "id" can be anything
router.put('/:id', async (req,res) =>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{  //findByIdAndUpdate is a mongoose method (predefined)
             new: true, // return the updated document
             runValidators: true // validate the updated data
        });

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})



// DELETE method to delete the person
router.delete('/:id', async (req,res) =>{
    try{
        const personId = req.params.id; // Extract the personId from the URL parameter

        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message: 'Person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }  
})


module.exports = router;