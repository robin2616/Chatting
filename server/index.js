const express=require('express');
const app = express();
const mongoose=require('mongoose');
const port=3000;
const cors=require('cors');
 const bodyParser=require('body-parser');
console.log("hello world");
 app.use(cors());
 app.use(bodyParser.json());






async function main() {
   await mongoose.connect('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/chat?retryWrites=true&w=majority&appName=First');
  console.log("connection successful")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().catch(err=>console.log(err))

const userlist = new mongoose.Schema({
    name: String,
    password: String
  });

  const id = mongoose.model('id', userlist);


app.get('/',(req, res)=>{
    res.send("hello world")
})
app.post('/fetch',async(req, res)=>{
    console.log(req.body.password);
    const rob=await id.find({password:req.body.password})
    res.json(rob)
})



    // mongoose.connect('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/chat?retryWrites=true&w=majority&appName=First')
    // .then(()=>{console.log("connected");})
    // .catch(()=>console.log("err"))
    // // console.log("db connected")



// const DB='mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/id?retryWrites=true&w=majority&appName=First'

// mongoose.connect(DB,{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log('sucessfully connected');})
    // .catch(() => console.log("error connecting"));

// const connextDB=async()=>{
//     await mongoose.connect('mongodb+srv://robinkumardbg11:aPTJ!E8LbWEgZZf@first.qxoadwq.mongodb.net/Chatting?retryWrites=true&w=majority&appName=First')
// console.log(`connected at ${mongoose.connection.host}`)
// }
// connextDB()
// app.post('/fetch', (req, res) =>{
//     res.send("hello")
// })



app.listen(port,()=>{
             console.log(`listening on port ${port}`)
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