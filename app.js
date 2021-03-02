const app = require('express')();
const mongoose = require('mongoose');
const PORT=5000;
const routes=require('./routes');

mongoose.connect('mongodb://localhost/mydb');




const myPersonSchema=mongoose.Schema(
    {
        name:String,
        age:Number,
        nationality:String
    });


const Person = mongoose.model("Person",myPersonSchema);

app.use(routes);


app.listen(PORT,()=>{
    console.log(`Running on http://localhost:${PORT}`);
})



