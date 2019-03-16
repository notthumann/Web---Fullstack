const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => {    
    res.sendFile(__dirname + '/views/home.html')
});

app.get('/randomquestion',(req,res) => {
    const questionList = JSON.parse(fs.readFileSync('./questions.json','utf-8'));
    const randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
    res.send(randomQuestion);
});

app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/views/ask.html');
});

app.post('/addquestion',(req,res)=>{
    // req.on('data', (data) => {
    //     const stringData = data + '';
    //     console.log(stringData.split('='));
    // });
    const questionList = JSON.parse(fs.readFileSync('./questions.json','utf-8'));
    const question = {
        content: req.body.question,
        yes:0,
        no:0,
        id: questionList.length,
    };
    console.log(question);
    
    questionList.push(question);
    fs.writeFileSync('./questions.json',JSON.stringify(questionList));
    res.redirect("/ask");
});

app.put("/editquestion", (req,res)=> {
    const questionList = JSON.parse(fs.readFileSync('./questions.json','utf-8'));
    const question = req.body;
    questionList[question.id] = question;
    fs.writeFileSync("./questions.json", JSON.stringify(questionList));
});

app.get("/vote/:questionId/yes", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const questionId = req.params.questionId;
	questionList[questionId].yes = Number(questionList[questionId].yes) + 1;
	console.log(questionList);
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	res.redirect(
        '/question/' + questionId
    );
});

app.get("/vote/:questionId/no", (req, res) => {
	const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
	const questionId = req.params.questionId;
	questionList[questionId].no = Number(questionList[questionId].no) + 1;
	console.log(questionList);
	fs.writeFileSync("./questions.json", JSON.stringify(questionList));
	res.redirect(
        '/question/' + questionId
    );
});
app.get("question/:questionId",(req,res) =>{
    const questionList = JSON.parse(fs.readFileSync("./questions.json", "utf-8"));
    const questionId = req.params.questionId;
    const question = questionList[questionId];
    const content = question.content;
    const yesPer = Math.round((question.yes / (question.yes + question.no))*100);
    const noPer = 100 - yesPer;
    res.send("Question: " + content + "Yes" + yesPer + "No" + noPer);

})



app.listen(3000, (err) =>{
    if(err) console.log(err)
    else console.log('Server start!!');
});