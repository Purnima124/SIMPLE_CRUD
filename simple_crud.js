var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Purnima@123",
  database: "simple_crud"
});
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connecte customers!");
//   var sql = "INSERT INTO crud (name,lastName,phoneNumber,Email,password) VALUES ('purnima','kumari','8969871624','purnima20@navgurukul.org','Purnima@123')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });
const express=require('express')
const app = express();
app.use(express.json())

app.listen(3000,()=>{
    console.log("listing the port at 3000 with express")
})
app.get("/get",(req,res)=>{
  con.query("select * from crud",(err,rows,fields)=>{
    if(err){
      console.log("not selected any elements")
    }else{
      res.send(rows)
    console.log(rows);

    }
  })
  
})
app.post('/post',(req,res)=>{
  con.query("insert into crud set ?",[req.body],function(err,result){
    if(err){
      console.log(err)
    }else{
      console.log("successfullly post")
      res.send("data post")

    }
  })
})
app.put('/put',(req,res)=>{
  con.query("insert into crud set ?",[req.body],function(err,result){
    if(err){
      console.log(err)
    }else{
    res.send("data put")
    console.log("upadated")
    }
  })
})
app.delete('/delete',(req,res)=>{
  var sql = "DELETE FROM customers WHERE name = 'pooja'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send("data deleted")
    console.log("records deleted: " );

  });
});



