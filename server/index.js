const express=require('express');
const app = express();
const mongoose=require('mongoose');
const port=process.env.PORT;
const cors=require('cors');
 const bodyParser=require('body-parser');
console.log("hello world");
 app.use(cors());
 app.use(bodyParser.json());






async function main() {
   await mongoose.connect('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/chat?retryWrites=true&w=majority&appName=First');
  console.log("connection successful")

}

main().catch(err=>console.log(err))

const userlist = new mongoose.Schema({
    name: String,
    password: String
  });

  const messlist = new mongoose.Schema({
    bywhom: String,
    message: String,
    time: String,
    date: String
   
  });


  const id = mongoose.model('id', userlist);
  const message = mongoose.model('message', messlist);

app.get('/',(req, res)=>{
    res.send("hello world")
})
app.post('/fetch',async(req, res)=>{
    const rob=await id.find({password:req.body.password})
    res.json(rob)
})

 app.post('/mess',async(req, res)=>{
    let m=new message();
    m.bywhom=req.body.name;
    m.message=req.body.message
    m.date=req.body.date
    m.time=req.body.time  
    const rob=await m.save();
    res.json(rob)
})


    


app.listen(port,()=>{
             console.log(`listening on port ${port}`)
         })


