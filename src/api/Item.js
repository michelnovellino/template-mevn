const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/',(req,res)=>{
 Item.find(function(err,items){
     if(err){throw err;
    }else{
            res.json(items)
     }
 })
});

router.post('/',(req,res)=>{
    const item = new Item(req.body);
    item.save()
    .then(item =>{
        res.status(200).json({
            item:'Item agregado'
        }); 
    })
    .catch(err=>{
        res.status(400).json({
            item:'Error al agregar item'
        });
    });
});

router.put('/:id',(req,res,next)=>{
    Item.findById(req.params.id,function(err,item){
        if(!item){
            return next(new Error('sin coincidencias'));
        } else{
            item.name = req.body.name;
            item.price = req.body.price;
            item.save()  
            .then(item =>{
                res.status(200).json({
                    item:'Item actualizado'
                });
            })
            .catch(err=>{
                res.status(400).json({
                    item:'Error al actualizar item'
                });
            });
        }
    });
 
});

router.delete('/:id',(req,res,next)=>{
    Item.findByIdAndRemove(req.params.id,function(err,item){
       if(err){
           res(400).json(err);
       }else{
           res(200).json('item eliminado!');
       }
    });
 
});


module.exports = router;

