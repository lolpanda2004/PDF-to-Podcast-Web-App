import express from "express"

const app = express()


app.get("/", (req, res)=>{
    res.send('First time backending')
})

const port = process.env.PORT || 5173

app.listen(port, ()=>{
    console.log(port)
})