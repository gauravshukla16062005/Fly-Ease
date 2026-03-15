const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

/* DATABASE CONNECTION */

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"123456",
database:"fly_ease"
})

db.connect(err=>{

if(err){
console.log("DATABASE CONNECTION ERROR:",err)
}
else{
console.log("MySQL Connected")
}

})


/* ================= REGISTER ================= */

app.post("/register",(req,res)=>{

const {name,email,password} = req.body

console.log("REGISTER REQUEST:",req.body)

const sql = "INSERT INTO users (name,email,password) VALUES (?,?,?)"

db.query(sql,[name,email,password],(err,result)=>{

if(err){

console.log("SQL ERROR:",err)

return res.json({
success:false,
message:"Database Error"
})

}

console.log("USER INSERTED SUCCESSFULLY")

res.json({
success:true
})

})

})


/* ================= LOGIN ================= */

app.post("/login",(req,res)=>{

const {email,password} = req.body

console.log("LOGIN REQUEST:",req.body)

const sql = "SELECT * FROM users WHERE email=? AND password=?"

db.query(sql,[email,password],(err,result)=>{

if(err){

console.log("LOGIN SQL ERROR:",err)

return res.json({
success:false
})

}

if(result.length>0){

console.log("LOGIN SUCCESS")

res.json({
success:true,
user:result[0]
})

}

else{

console.log("INVALID LOGIN")

res.json({
success:false
})

}

})

})


/* ================= GET ALL FLIGHTS ================= */

app.get("/flights",(req,res)=>{

db.query("SELECT * FROM flights",(err,result)=>{

if(err){
console.log(err)
res.json([])
}
else{
res.json(result)
}

})

})


/* ================= SEARCH FLIGHTS ================= */

app.get("/searchFlights",(req,res)=>{

let {source,destination,date} = req.query

const sql = "SELECT * FROM flights WHERE source=? AND destination=?"

db.query(sql,[source,destination],(err,result)=>{

if(err){
console.log(err)
res.json([])
}
else{
res.json(result)
}

})

})


/* ================= BOOK FLIGHT ================= */

app.post("/book",(req,res)=>{

let {flight_id,name,email,phone,passport} = req.body

const sql = "INSERT INTO bookings (flight_id,user_email,name,phone,passport,status) VALUES (?,?,?,?,?,'Booked')"

db.query(sql,[flight_id,email,name,phone,passport],(err,result)=>{

if(err){

console.log("BOOKING ERROR:",err)

res.json({
success:false
})

}
else{

console.log("FLIGHT BOOKED")

res.json({
success:true
})

}

})

})


/* ================= SERVER ================= */

app.listen(3000,()=>{

console.log("Server Running On Port 3000")

})