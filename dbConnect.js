const mongoose=require('mongoose');
const url='mongodb+srv://ritusingh:2002@cluster0.0vz1y3l.mongodb.net/test';
 mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
const  connection=mongoose.connection;
connection.on('connected',()=>{
    console.log('mongoDb connection successful');
})
connection.on('error',(error)=>{
console.log(error);
})