const express=require('express');
const app = express();
const mongoose=require('mongoose');
const port=10000;
const cors=require('cors');
 const bodyParser=require('body-parser');
console.log("hello world");
 app.use(cors());
 app.use(bodyParser.json());

main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/')
    console.log("db connected")
}

app.post('/passfetch',async(req,res)=>{
    const user=await Product.find({password:req.body.password})
    res.json(user)
    })
