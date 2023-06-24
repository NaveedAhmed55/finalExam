const mongoose=require('mongoose')
const Schema=mongoose.Schema

const recipeSchema=new Schema({
     title:String,
     description:String,
     ingredients:String,
     instructions:String,
})
module.exports=mongoose.model('recipe',recipeSchema)

