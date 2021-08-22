import express from "express"
import mysql from "mysql"
// import bodyParser from "body-parser";
import cors from "cors"

const app = express()

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "34334770",
    database: "new_schem1"
});
app.use(cors);
// app.use(bodyParser.urlencoded({extended: true}))


app.post("/api/insert",(req, res)=>{

    const userName = req.body.UserName
    const phoneNumber = req.body.PhoneNumber
    const emailAdress = req.body.EmailAdress



    const sqlInsert = "INSERT INTO new_schem1.users (UserName, PhoneNumber,EmailAdress) VALUES (? , ?, ?);"
    db.query(sqlInsert, [userName, phoneNumber, emailAdress] ,(err, result)=>{
        console.log(result)

    })
})


app.listen(3001, () => {
    console.log("my app is runing 3001")
})

