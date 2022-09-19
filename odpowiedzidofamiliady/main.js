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