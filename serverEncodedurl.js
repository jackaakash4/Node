import express from "express";
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.urlencoded({extended: false}))   //for urlencoded data

app.get('/', (req, res)=>{
    res.send('Getting root');
});

app.get('/profile', (req, res)=>{
    res.send("GEtting profile")
});

app.post('/profile', (req, res)=>{
    console.log("Req.body", req.body);
   
    res.send(req.body);
});

app.listen(3000);
