const mongoose = require('mongoose')

const users = new mongoose.Schema({
    name:{
        type:String,
    },
    mobile:{
        type:String,
    },
    description:{
        type:String
    }
})

const usersList = mongoose.model("users",users)

module.exports = usersList;