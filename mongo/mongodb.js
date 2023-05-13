const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.URL, {

    useNewUrlParser: "true",
    useUnifiedTopology: "true"
  
  })
.then(()=>{
    console.log("CONNECTED")
})
.catch((err)=>{
    console.log(err)
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    },
})

const collection=new mongoose.model("Collection1",LogInSchema)
module.exports=collection