const mongoose = require('mongoose')

const DatabaseConnection = () => {

mongoose.connect('mongodb+srv://chandan12:qwerty12@interactia.nuor0av.mongodb.net/flipkart_database?retryWrites=true&w=majority',{useNewUrlParser: true,
useUnifiedTopology: true,}).then(()=> console.log("connected")).catch((error)=>console.log(error))
}

module.exports = DatabaseConnection