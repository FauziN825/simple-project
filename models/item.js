const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({

    nameitem: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('Item',itemSchema)