import express from "express";
import bodyParser from "body-parser"

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());     //for json data

app.get('/', (req, res)=>{
    res.send('Getting root');
});

app.get('/profile', (req, res)=>{
    res.send("GEtting profile")
});

app.post('/profile', (req, res)=>{
    console.log("Req.body", req.body);
   
    res.send('Sucessfully uploaded');
});

app.listen(3000);
