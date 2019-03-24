const express= require('express');
const router= express.Router();
const Rental= require('../model/rental');

router.get('', function(req,res){
    Rental.find({}, function(err, foundRentals) {
       res.json(foundRentals);
    })
});
 router.get('/:id', function(req,res) {
     const rentalId= req.params.id;
     Rental.findById(rentalId,function(err, foundRental){
         if(err){
             res.status(422).send({errors: [{title: 'not found', detail :'not exist'}]});
         }
        res.json(foundRental);
     });
 });
module.exports = router;