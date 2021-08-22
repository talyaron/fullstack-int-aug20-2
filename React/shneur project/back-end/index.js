import express from "express"
import mysql from "mysql"
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "new_schem1"
});
const app = express()


app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO users (UserID, UserName, PhoneNumber,EmailAdress ) VALUES (4, `chass`, 5678765,`444@5678`);"
    db.query(sqlInsert, (err, result) => {
        res.send("hello you");
    })

})

app.listen(3001, () => {
    console.log("my app is runing 3001")
})

