const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const app = express();
const QuestionModel = require('./models/question');

mongoose.connect(
    'mongodb://notthumann:minhngoc123@ds019866.mlab.com:19866/webfullstack',
    { userNewUrlParser: true},
    (err)=>{
        if(err) console.log(err)
        else console.log("Connect to DB success");
        // QuestionModel.find({ }, (err, docs) =>{
        //     if(err) console.log(docs);
        //     else console.log(docs);           
        // })
    }
);

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {    
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/randomquestion',(req,res) => {
    QuestionModel.find({ }, (err, docs) => {
        if(err) console.log(err)
        else {
            const questionList = docs;
            const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
            res.send(randomQuestion);
        }
    });
});

app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/views/ask.html');
});

app.post('/addquestion',(req,res)=>{
    // req.on('data', (data) => {
    //     const stringData = data + '';
    //     console.log(stringData.split('='));
    // });
    // const questionList = JSON.parse(fs.readFileSync('./questions.json','utf-8'));
    var question = new QuestionModel({
        content: req.body.question,
        yes:0,
        no:0,
    });
    console.log(question);
    question.save();
    
    // questionList.push(question);
    // fs.writeFileSync('./questions.json',JSON.stringify(questionList));
    res.redirect("/ask");
});

app.put("/editquestion", (req,res)=> {
    QuestionModel.find({ }, (err, docs) => {
       if(err) console.log(err)
       else {
           const answer = req.body;
           for (i= 0; i < questionList.length; i++){
                if (docs[i].id = answer.id){
                    docs[i] = answer;
                    console.log(docs[i]);
                    docs[i].save();
                }
           }
           
       } 
    });
});

app.get("/vote/:questionId/yes", (req, res) => {
	QuestionModel.find({}, (err, docs) => {
        const questionId = req.params.questionId;
        for(i= 0; i < docs.length; i++){
            if (docs[i].id = questionId){
                docs[i].yes = Number(docs[i].yes) + 1;
                console.log(docs[i]);
                docs[i].save();
            }
        
        res.redirect(
            `/question/${questionId}`
        );
       }
    })
	
});


app.get("/vote/:questionId/no", (req, res) => {
	QuestionModel.find({}, (err, docs) => {
        if(err) console.log(err)
        else{
            const questionId = req.params.questionId;
        for(i= 0; i < docs.length; i++){
            if (docs[i].id = questionId){
                docs[i].no = Number(docs[i].no) + 1;
                console.log(docs[i]);
                docs[i].save();
            }
        
        res.redirect(
            `/question/${questionId}`
        );
        }
       }
    })
	
});
app.get("/question/:questionId",(req,res) =>{
    // const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
    // const questionId = req.params.questionId;
    // const question = questionList[questionId];
    // const content = question.content;
    // const yesPer = Math.round((question.yes / (question.yes + question.no))*100);
    // const noPer = 100 - yesPer;
    // res.send("Question: " + content + "Yes" + yesPer + "No" + noPer);
    res.sendFile(__dirname + '/views/questionInfo.html')

});

app.get("/detail/:questionId", (req, res) =>{
    QuestionModel.find({}, (err,docs) => {
        if(err) console.log(err);
        else{
        const questionId = req.params.questionId;
        for(i = 0; i < docs.length; i ++){
            if(docs[i].id = questionId){
                const question = docs[i]
                res.send(question);
            }
        }
        
    }
    })
    // 
    // const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
    // const question = questionList[questionId];
    // res.send(question);
})



app.listen(3000, (err) =>{
    if(err) console.log(err)
    else console.log('Server start!!');
});