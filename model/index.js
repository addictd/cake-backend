const mongoose=require("mongoose")

mongoose.connect("mongodb://deep:7068125692dc@ds233763.mlab.com:33763/cake",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,},(error)=>{
    mongoose.Promise = global.Promise;
if(!error){
console.log("DB connected.")
}
else{
    console.log("DB connection failed.")
}
})

const User=require("./users.model")
const News=require("./news.model")
const Category=require("./category.model")
const Offers=require("./offers.model")
const Cakes=require("./cakes.model")