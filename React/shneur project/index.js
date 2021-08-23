import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()


app.use(cors);
app.use(express.json())
const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "34334770",
    database: "new_schem1"



    //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
});

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    con.query("use new_schem1", (err, result, fields) => {
        if (err) throw err;
        console.log('con.connect successful');

    });
});



app.post("/api/insert", (req, res) => {
    console.log('ff')
    const userName = req.body.UserName
    const phoneNumber = req.body.PhoneNumber
    const emailAdress = req.body.EmailAdress



    const sqlInsert = `INSERT INTO new_schem1.users (UserName, PhoneNumber,EmailAdress) VALUES (${userName} , ${phoneNumber}, ${emailAdress});`
    con.query(sqlInsert, (err, result) => {
        console.log(result, err)
        res.send({
            ok: true
        })
    })
})


app.listen(3001, () => {
    console.log("my app is runing 3001")
})