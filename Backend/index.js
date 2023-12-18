const express=require('express');
const cors=require('cors');
const mysql2=require('mysql2');
const app=express();

const port=8000;

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("This is backend");
})


//connect to database
const connection=mysql2.createConnection({
    host:'localhost',
    port:'3306',
    database:'Accredian',
    user:'root',
    password:'vaibhav@123'

});

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to database successfully");
    }
})




//user routes
app.post('/user',(req,res)=>{
    var user={username:req.body.username,
        email:req.body.email,
        password:req.body.password
       
    }

    var sql="INSERT INTO user SET ?";
    connection.query(sql,user,function(err,result){
       if(err) {
        console.log(err);

       }else{
        console.log("data store successfully");
        res.send(user);
       }
    });
});


//get user

app.get('/get',(req,res)=>{
    var email=req.query.email;
    var password=req.query.password;   
      var sql="SELECT * FROM user WHERE email= ? AND password= ? ";
       connection.query(sql,[email,password],function(err,result){
           if(err){
            console.log(err);
           }else{
            res.status(200).json(result);
            console.log(result);
           }
       })
});
 



//server listen on
app.listen(port,()=>{
    console.log("Server is listen on port no " , port);
})