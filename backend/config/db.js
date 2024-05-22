const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://vidhyavarshinib:vidhya2004@mern.onhqni1.mongodb.net/MERN?retryWrites=true&w=majority&appName=MERN")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB