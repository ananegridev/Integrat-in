// REGISTRO START.HTML
var answer = JSON.parse(window.localStorage.getItem('register'));
var companyid = JSON.parse(window.localStorage.getItem('companyid'));

// VARIAVEIS DAS QUESTÕES
var q1 = document.getElementById('question-1');
var q2 = document.getElementById('question-2');
var q3 = document.getElementById('question-3');
var q4 = document.getElementById('question-4');
var q5 = document.getElementById('question-5');
var q6 = document.getElementById('question-6');
var q7 = document.getElementById('question-7');
var q8 = document.getElementById('question-8');
var q9 = document.getElementById('question-9');
var q10 = document.getElementById('question-10');
var q11 = document.getElementById('question-11');
var q12 = document.getElementById('question-12');
var q13 = document.getElementById('question-13');
var q14 = document.getElementById('question-14');
var q15 = document.getElementById('question-15');
var q16 = document.getElementById('question-16');
var q17 = document.getElementById('question-17');
var q18 = document.getElementById('question-18');
var q19 = document.getElementById('question-19');
var q20 = document.getElementById('question-20');
var q21 = document.getElementById('question-21');
var q22 = document.getElementById('question-22');
var q23 = document.getElementById('question-23');
var q24 = document.getElementById('question-24');
var q25 = document.getElementById('question-25');
var q26 = document.getElementById('question-26');
var q27 = document.getElementById('question-27');
var q28 = document.getElementById('question-28');
var q29 = document.getElementById('question-29');
var q30 = document.getElementById('question-30');
var q31 = document.getElementById('question-31');
var q32 = document.getElementById('question-32');
var q33 = document.getElementById('question-33');
var q34 = document.getElementById('question-34');

// NODE LIST DAS QUESTÕES
let pagOne = document.querySelectorAll('[data-page-one]');
let pagTwo = document.querySelectorAll('[data-page-two]');
let pagThree = document.querySelectorAll('[data-page-three]');
let pagFour = document.querySelectorAll('[data-page-four]');

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// --------- EVENTOS DE CLICK DO BOTÃO

q1.addEventListener('click', function (event) { answer = storeAnswer("FIF1.1", event) });
q2.addEventListener('click', function (event) { answer = storeAnswer("FIF1.2", event) });
q3.addEventListener('click', function (event) { answer = storeAnswer("FIF1.3", event) });
q4.addEventListener('click', function (event) { answer = storeAnswer("FIF1.4", event) });
q5.addEventListener('click', function (event) { answer = storeAnswer("FIF1.5", event) });
q6.addEventListener('click', function (event) { answer = storeAnswer("FIF1.6", event) });
q7.addEventListener('click', function (event) { answer = storeAnswer("FIF1.7", event) });
q8.addEventListener('click', function (event) { answer = storeAnswer("FIF1.10", event) });
q9.addEventListener('click', function (event) { answer = storeAnswer("IIF1.2", event) });
q10.addEventListener('click', function (event) { answer = storeAnswer("IIF1.3", event) });
q11.addEventListener('click', function (event) { answer = storeAnswer("IIF1.5", event) });
q12.addEventListener('click', function (event) { answer = storeAnswer("IIF1.6", event) });
q13.addEventListener('click', function (event) { answer = storeAnswer("IIF1.7", event) });
q14.addEventListener('click', function (event) { answer = storeAnswer("IIF1.8", event) });
q15.addEventListener('click', function (event) { answer = storeAnswer("IIF1.9", event) });
q16.addEventListener('click', function (event) { answer = storeAnswer("IIF1.10", event) });
q17.addEventListener('click', function (event) { answer = storeAnswer("IIF1.11", event) });
q18.addEventListener('click', function (event) { answer = storeAnswer("IIF1.12", event) });
q19.addEventListener('click', function (event) { answer = storeAnswer("IIF1.13", event) });
q20.addEventListener('click', function (event) { answer = storeAnswer("C1.1", event) });
q21.addEventListener('click', function (event) { answer = storeAnswer("C1.2", event) });
q22.addEventListener('click', function (event) { answer = storeAnswer("C1.3", event) });
q23.addEventListener('click', function (event) { answer = storeAnswer("C1.4", event) });
q24.addEventListener('click', function (event) { answer = storeAnswer("C1.5", event) });
q25.addEventListener('click', function (event) { answer = storeAnswer("C1.6", event) });
q26.addEventListener('click', function (event) { answer = storeAnswer("C1.7", event) });
q27.addEventListener('click', function (event) { answer = storeAnswer("C1.8", event) });
q28.addEventListener('click', function (event) { answer = storeAnswer("C1.9", event) });
q29.addEventListener('click', function (event) { answer = storeAnswer("C1.10", event) });
q30.addEventListener('click', function (event) { answer = storeAnswer("C1.11", event) });
q31.addEventListener('click', function (event) { answer = storeAnswer("C1.12", event) });
q32.addEventListener('click', function (event) { answer = storeAnswer("IM1.1", event) });
q33.addEventListener('click', function (event) { answer = storeAnswer("IM1.2", event) });
q34.addEventListener('click', function (event) { answer = storeAnswer("IM1.3", event) });

// --------- PEGAR VALUE DO QUIZ

function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        var question = {}
        question[question_number] = parseInt(event.target.value);
        Object.assign(answer, question)
    }
    return answer;
}

// --------- URL POSTMAN

var url = "https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies/"+companyid+"/answers";

async function postAnswer(answer, event) {

    var result_type = {}
    if (answer.calculation === 'i') {
        result_type["result_type"] = "individual";
    }
    if (answer.calculation === 'c') {
        result_type["result_type"] = "company-wide";
    }
    var format_answer = {}
    Object.assign(format_answer, result_type)
    delete answer.calculation
    Object.assign(format_answer, { answer })

    let teste = JSON.stringify(format_answer);
    console.log(teste)

    if (event.target.type === 'submit') {

        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Request-Method", "POST", "Content-Type", "application/json", "Access-Control-Allow-Origin", "*", "Access-Control-Allow-Origin", "https://127.0.0.1:5500");

        var requestOptions = {
            method: 'POST',
            dataType: 'json',
            headers: myHeaders,
            body: JSON.stringify(format_answer),
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(function (result) {
                localStorage.setItem("result", JSON.stringify(result));
                window.location.href = "./result.html";
            })
            .catch(error => console.log('error', error));
    }
}

// --------- LOAD QUIZ 

let load = document.querySelector('.container-load');
load.style.display = 'none';

// --------- PAGINAÇÃO QUIZ

let sub1 = document.getElementById('submit-1');
let sub2 = document.getElementById('submit-2');
let sub3 = document.getElementById('submit-3');
let finish = document.getElementById('submit-4');

let back1 = document.getElementById('back-1');
let back2 = document.getElementById('back-2');
let back3 = document.getElementById('back-3');
let back4 = document.getElementById('back-4');

let row1 = document.getElementById('row-box-1');
let row2 = document.getElementById('row-box-2');
let row3 = document.getElementById('row-box-3');
let row4 = document.getElementById('row-box-4');

const boxBtn1 = document.getElementById('box-btn-1');
const boxBtn2 = document.getElementById('box-btn-2');
const boxBtn3 = document.getElementById('box-btn-3');
const boxBtn4 = document.getElementById('box-btn-4');

row1.style.display = 'block';
row2.style.display = 'none';
row3.style.display = 'none';
row4.style.display = 'none';

boxBtn1.style.display = 'flex';
boxBtn2.style.display = 'none';
boxBtn3.style.display = 'none';
boxBtn4.style.display = 'none';

finish.style.display = 'none';
back4.style.display = 'none';

sub1.addEventListener('click', function () {
    if (checkValidation(pagOne, 1)) {
        if (row1.style.display === 'block') {
            row1.style.display = 'none';
            row2.style.display = 'block';
            row3.style.display = 'none';
            row4.style.display = 'none';
            boxBtn1.style.display = 'none';
            boxBtn2.style.display = 'flex';
            boxBtn3.style.display = 'none';
            boxBtn4.style.display = 'none';
            finish.style.display = 'none';
            back4.style.display = 'none';
            document.querySelector('.toast').style.display = "none";
            window.location.href = "#row-box-2";
        }
    } else {
        window.location.href = "#alert";
        document.querySelector('.toast').style.display = "flex";
    }
})

sub2.addEventListener('click', function () {
    if (checkValidation(pagTwo, 11)) {
        if (row2.style.display === 'block') {
            row1.style.display = 'none';
            row2.style.display = 'none';
            row3.style.display = 'block';
            row4.style.display = 'none';
            boxBtn1.style.display = 'none';
            boxBtn2.style.display = 'none';
            boxBtn3.style.display = 'flex';
            boxBtn4.style.display = 'none';
            finish.style.display = 'none';
            back4.style.display = 'none';
            document.querySelector('.toast').style.display = "none";
            window.location.href = "#row-box-3";
        }
    } else {
        window.location.href = "#alert";
        document.querySelector('.toast').style.display = "flex";
    }
})

sub3.addEventListener('click', function () {
    if (checkValidation(pagThree, 21)) {
        if (row3.style.display === 'block') {
            row1.style.display = 'none';
            row1.style.display = 'none';
            row2.style.display = 'none';
            row3.style.display = 'none';
            row4.style.display = 'block';
            boxBtn1.style.display = 'none';
            boxBtn2.style.display = 'none';
            boxBtn3.style.display = 'none';
            boxBtn4.style.display = 'flex';
            finish.style.display = 'block';
            back4.style.display = 'block';
            document.querySelector('.toast').style.display = "none";
            window.location.href = "#row-box-4";
        }
    } else {
        window.location.href = "#alert";
        document.querySelector('.toast').style.display = "flex";
    }
})

finish.addEventListener('click', function (event) {
    if (checkValidation(pagFour, 32)) {
        if (row4.style.display === 'block') {
            row1.style.display = 'none';
            row2.style.display = 'none';
            row3.style.display = 'none';
            row4.style.display = 'none';
            load.style.display = 'flex';
            document.querySelector('.toast').style.display = "none";
            postAnswer(answer, event);
        }
    } else {
        window.location.href = "#alert";
        document.querySelector('.toast').style.display = "flex";
    }
})

// --------- BOTÃO BACK

back2.addEventListener('click', function () {
    if (row2.style.display === 'block') {
        row1.style.display = 'block';
        row2.style.display = 'none';
        row3.style.display = 'none';
        row4.style.display = 'none';
        boxBtn1.style.display = 'flex';
        boxBtn2.style.display = 'none';
        boxBtn3.style.display = 'none';
        finish.style.display = 'none';
        back4.style.display = 'none';
        window.location.href = "#row-box-1";
    }
})

back3.addEventListener('click', function () {
    if (row3.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'block';
        row3.style.display = 'none';
        row4.style.display = 'none';
        boxBtn1.style.display = 'none';
        boxBtn2.style.display = 'flex';
        boxBtn3.style.display = 'none';
        finish.style.display = 'none';
        back4.style.display = 'none';
        window.location.href = "#row-box-2";
    }
})

back4.addEventListener('click', function () {
    if (row4.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'none';
        row3.style.display = 'block';
        row4.style.display = 'none';
        boxBtn1.style.display = 'none';
        boxBtn2.style.display = 'none';
        boxBtn3.style.display = 'flex';
        finish.style.display = 'none';
        back4.style.display = 'none';
        window.location.href = "#row-box-3";
    }
})

// --------- RETIRANDO PREVENT DEFAULT DO FORM

function submitForm(event) {
    event.preventDefault();
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
})

// --------- VALIDAÇÃO QUIZ

function checkValidation(pagenum, start) {
    var can_next = []
    var array_pagina = [];
    var num_questions = pagenum.length / 7;
    var array_questions = [];

    pagenum.forEach(item => {
        array_pagina.push(item.checked);
    })

    while (array_pagina.length) array_questions.push(array_pagina.splice(0, 7));

    for (var i = 0; i < num_questions; i++) {
        var checkquestion = Boolean(array_questions[i].reduce((a, b) => a + b))
        can_next.push(checkquestion)
        var identf_question = "question-" + (i + start)
        if (checkquestion === false) {
            document.getElementById(identf_question).style.background = '#e2242442';
        } else {
            document.getElementById(identf_question).style.background = 'none';
        }
    }
    return can_next.reduce((a, b) => a + b) === num_questions
}
