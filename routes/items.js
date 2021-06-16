const express = require('express')
const item = require('../models/item')
const router = express.Router()
const Item = require('../models/item')


router.get('/', async(req,res) => {
    try{
           const items = await Item.find()
           res.json(items)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const item = await Item.findById(req.params.id)
           res.json(item)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
           const item = await Item.findByIdAndDelete(req.params.id)
           const message = "Deleted"
           res.json(message)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const item = new Item({
        nameitem: req.body.nameitem,
        price: req.body.price,
    })

    try{
        const a1 =  await item.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const item = await Item.findById(req.params.id) 
        item.price = req.body.price
        item.nameitem = req.body.nameitem
        const a1 = await item.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router