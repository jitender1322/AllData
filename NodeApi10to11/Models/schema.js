const mongoose = require("mongoose")

const schema = mongoose.Schema({
    Name :{
        type : String,
        required : true
    },
    Age :{
        type : Number,
        required : true
    },
    City :{
        type : String,
        required : true
    },
})

const firstSchema = mongoose.model("Crud",schema);

module.exports=firstSchema

