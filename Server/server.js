import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res)=>{
    res.send("First time backending");
});

app.listen(PORT, ()=>{
    console.log('The server is running on http://localhost:${PORT}/');
});