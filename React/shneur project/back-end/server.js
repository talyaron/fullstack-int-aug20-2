import express from "express"
import cors from "cors"
import data from "./api/data.js"

app.use(cors());
app.use(express.json());
app.use("/api/data", data);
app.use("*", (req, res)=>res.statis(404).json({error: "not found"}));


export default app

