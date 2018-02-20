import express from "express";
import routes from "./src/routes/demoRoute"
const app = express();
const PORT = 3001;

routes(app);

app.get('/',(req,resp)=>
resp.send(`Node and Express server are running on ${PORT}`)
)

app.listen(PORT, ()=>
    console.log(`Your server is running on ${PORT}`)
)