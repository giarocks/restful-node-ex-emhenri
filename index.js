import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
//allows to send obj/data thru our DB via http POST
import routes from "./src/routes/demoRoute"

const app = express();
const PORT = 3001;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/demodb',{
    //useMongoClient:true //not doing this gives err
});

//body parser setup
app.use(bodyParser.urlencoded({extended:true}))
//setup json to work when u do the post request
app.use(bodyParser.json());
routes(app);

//serving static files
app.use(express.static('public'));


app.get('/',(req,resp)=>
resp.send(`Node and Express server are running on ${PORT}`)
)

app.listen(PORT, ()=>
    console.log(`Your server is running on ${PORT}`)
)