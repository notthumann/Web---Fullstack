const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/views/ask.html');
});

app.post('/addquestion',(req,res)=>{
    // req.on('data', (data) => {
    //     const stringData = data + '';
    //     console.log(stringData.split('='));
    // });
    const question = req.body.question;
    console.log(question);
    const questionList = JSON.parse(fs.readFileSync('./questions.json','utf-8'));
    questionList.push(question);
    fs.writeFileSync('./questions.json',JSON.stringify(questionList));
    res.redirect("/ask");
});

app.listen(3000, (err) =>{
    if(err) console.log(err)
    else console.log('Server start!!');
});