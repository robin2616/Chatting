const mongoose= require(id:"mongoose");
const uri="mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/Chatting"
mongoose.connect(uri);




app.post('/passfetch',async(req,res)=>{
    const user=await Product.find({password:req.body.password})
    res.json(user)
    console.log(user)
    })






// const express=require('express');
// const app = express();
// const mongoose=require('mongoose');
// const port=3000;
// const cors=require('cors');
//  const bodyParser=require('body-parser');
// console.log("hello world");
//  app.use(cors());
//  app.use(bodyParser.json());

// main().catch(err=>console.log(err))
// async function main(){
//     await mongoose.connect('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/')
//     console.log("db connected")
// }

// app.post('/passfetch',async(req,res)=>{
//     const user=await Product.find({password:req.body.password})
//     res.json(user)
//     console.log(user)
//     })

//     app.listen(port,()=>{
//         console.log(`listening on port ${port}`)
//     });=