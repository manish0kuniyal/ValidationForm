const express=require("express")
const collection=require("./mongo/mongodb")
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine" ,"ejs")

app.get('/',(req,res)=>{
    res.render("login")
})
app.get('/signup',(req,res)=>{
    res.render("signup")
})
app.post("/signup", async (req,res) =>{

 const data={
    name:req.body.name,
    password:req.body.password
 }

await collection.insertMany([data])

res.render('home')
})

app.post("/login", async (req,res) =>{
   
    try{
          const check=await collection.findOne({name:req.body.name})
          if(check.password===req.body.password){
            res.render("home")
          }
          else{res.send("wrong pswrd")}
    }
    catch{
       res.send("usernotfound")
    }
   
   res.render('home')
   })


app.listen("3001",console.log("on 3001"))