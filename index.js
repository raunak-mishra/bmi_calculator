const express = require('express');
const bodyParser  = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res)=>{
    // console.log(req.body);
    let weight  = req.body.num1;
    let height  = req.body.num2;
    height = height / 100;
    let bmi = weight / (height*height);
    res. send("Your BMI is: " + bmi);
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
});