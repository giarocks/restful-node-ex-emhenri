import express from "express";

const app = express();
const PORT = 3000;

app.get('/',(req,resp)=>
resp.send(`Node and Express server are running on ${PORT} `)
)

app.listen(PORT, ()=>
    console.log(`Your server is running on ${PORT} `)
)