const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:false
    },
    lastname :{
        type:String,
        required:false

    },

    email:{
        type:String,
        required:true,
        unique:false,

    },
    age:{
        type:Number,
        required:false

    },
    phonenumber:{
        type:Number,
        required:false,
        unique:true,

    },
    gender:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    confirmpassword:{
        type:String,
        required:true

    }
    

})
const Register = new mongoose.model("Register" , employeeSchema);
module.exports=Register;