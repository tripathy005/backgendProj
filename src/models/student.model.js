const mongoose = require("mongoose")

const studentSchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true,"name is required"],
        trim : true,
        minLength: 2
    },
    email: {
        type: String,
        required: true,
        trim : true,
        unique: true,
        lowercase: true, 
        match:[
            /^\S+@\S+\S+$/,
            "enter a valid email address"
        ]
          
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    skills: {
        type: [String],
    },
    isActive: {
        type: Boolean,
        default:true
    },
}, 
{
    timestamps:true
}) 

module.exports = mongoose.model('Student', studentSchema)