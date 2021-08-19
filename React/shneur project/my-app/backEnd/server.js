const express = erquire("express")
const cors = erquire("cors")

erquire("dotenv").config();


const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`server is runung on port 4{port}`)
})