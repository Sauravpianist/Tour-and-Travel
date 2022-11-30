const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://saumyashipra:shipra%4012@cluster0.kf0p4vu.mongodb.net/user"

//connecting to mongoose
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connect to mongo  successfully")
    })
}
module.exports = connectToMongo;