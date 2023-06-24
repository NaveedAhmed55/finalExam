const express = require('express');
const path = require('path');
const cors = require("cors");

const mongoose = require('mongoose');
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "dbRecipe",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });


const bodyParser = require('body-parser');
const Recite  = require('./models/recipe');

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(express.urlencoded()) 
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.post('/recipe/save', (req, res) => {
    console.log(req.body)
    const recipe=Recite.insertMany(req.body)
    if(!recipe)
        res.redirect('/')
    res.redirect('/productList')
    
});
app.get("/recipe/:id", async (req, res) => {
    const filteredRecipe = await Recipe.find({ _id: req.params.id });
    res.render("/recipe-details", { recipe: filteredbk[0] });
  });

app.get("/productList", async (req, res) => {
    const recipes= await Recite.find();
    res.json({recipes});
  });

app.post("/recipes/:id/upate-data", (req, res) => {
    Recipe.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        console.log("Updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect("/");
  });
  
app.post("/recipes/:id/method=DELETE", async (req, res) => {
    Recite.deleteOne({ _id: req.params.id })
      .then(() => {
        console.log("Deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect("/");
  });


app.listen(4000,()=>{
    console.log("server running at 4000")
})