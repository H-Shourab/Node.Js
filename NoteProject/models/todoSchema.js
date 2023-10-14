const mongoose=require("mongoose")
const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required: true,

    },
    date:{
        type:String,
        required: true,
    }
})
const todoModel=mongoose.model("todo",todoSchema)
module.exports=todoModel