const express = require('express')
const router = require('express').Router();


let Form = require('../models/form.model');

//get the blogs

router.get('/',async(req,res)=>{
  
    try{
      const forms = await Form.find();
      res.json(forms);
    }catch(err){
      res.json({message:err});
    }
  })

//add blogs

router.post('/add',async(req,res)=>{
   
    const newForm = new Form({
        company_name: req.body.company_name,
        company_code: req.body.company_code,
        currency: req.body.currency,
        portal_language: req.body.portal_language,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        add_info: req.body.add_info,
        pincode: req.body.pincode,
      });

      try{
        const savedForm = await newForm.save();
        res.json(savedForm);
      }catch(err){
          res.json({message:err});
      }
})


  
  //delete specific blogs
  router.delete('/:id',async (req,res)=>{
    try{
      const deleteForm = await Form.remove({_id:req.params.id});
      res.json(deleteForm);
    }catch(err){
      res.json({message:err})
    }
  })
  
  // update blogs

  router.put('/:id',async(req,res)=>{
    try{
      const updatedForm = await Form.findByIdAndUpdate(
     
      req.params.id,
      req.body,
      {new: true}
      );
      res.json(updatedForm);
    }catch(err){
      res.json({message:err})
    }
    
  })
  

module.exports = router;