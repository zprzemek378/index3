const questions = new Array;
const questionsDate = new Array;
const questionsTime = new Array;


window.onload = function()
{
    const firstTime = new Date();
    let secondTime = firstTime.getTime();

    secondTime = 60000*Math.floor(secondTime/60000) + 7200000;

    localTime = new Date(secondTime);

    document.getElementById("newQuestionDate").valueAsDate = localTime;
    document.getElementById("newQuestionTime").valueAsDate = localTime;
    document.getElementById("newDateChoice").valueAsDate = localTime;
    document.getElementById("newTimeChoice").valueAsDate = localTime;

    document.getElementById("anotherAnswer").addEventListener("change", function()
    {
        if(document.getElementById("anotherAnswer").checked == true) document.getElementById("newAnswerChoice").style.visibility = "visible";
        else if(document.getElementById("anotherAnswer").checked == false) document.getElementById("newAnswerChoice").style.visibility = "hidden";
    });
}

onkeydown = clickedEnter;

function clickedEnter(button)
{
    let clickedButton = button.key;

    if(clickedButton == "Enter")
    {
        const m = document.activeElement.id;

        if(m=='newQuestion') addQuestion();
        if(m=='newPerson') addPerson();
        if(m=='newAnswerChoice') addAnswer();
    }
}

function addQuestion()
{
    questions.push(document.getElementById("newQuestion").value);
    questionsDate.push(document.getElementById("newQuestionDate").value)
    questionsTime.push(document.getElementById("newQuestionTime").value)



    document.getElementById("newQuestion").value = "";
}





/**
* We are going to authenticate with Github and
* specify our repo name and file we just created.
*/
var options = {
    host: 'private-github-api.com', // <-- Private github api url. If not passed, defaults to 'api.github.com'
    pathPrefix: 'prefix-for-enterprise-instance', // <-- Private github api url prefix. If not passed, defaults to null.
    protocol: 'https', // <-- http protocol 'https' or 'http'. If not passed, defaults to 'https'
    user: 'zprzemek378', // <-- Your Github username
    repo: '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', // <-- Your repository to be used a db
    remoteFilename: 'database.json' // <- File with extension .json
  };
   
  // Require GithubDB
  var GithubDB = require('..').default;
  // Initialize it with the options from above.
  var githubDB = new GithubDB(options);
   
  // Authenticate Github DB -> grab a token from here https://github.com/settings/tokens
  githubDB.auth(personalAccessToken);


  // Connect to repository 
  githubDB.connectToRepo();
   
  // You are now authenticated with Github and you are ready to use it as your database.
  githubDB.save({"message": "wooohoo"});


  var personalAccessToken = process.env.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; // Set the variable here