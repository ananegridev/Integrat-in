// --------- PEGANDO DADOS DO START.HTML VIA URL

var objURL = new URL(window.location.href);

// --------- PEGANDO DADOS DO START.HTML VIA URL E TRANSFORMANDO EM OBJ

let startForm = Object.fromEntries(objURL.searchParams);

// --------- PEGANDO DATA E HORA DA RESPOSTA DO USUÁRIO

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

// --------- PEGANDO DATA E HORA E ADICIONANDO NO OBJ

startForm.answerDate = today;
startForm.answerTime = time;

// --------- ARMAZENANDO DADOS JSON DAS PERGUNTAS E FORM NO JSON

var answers = {};

function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        answers['' + question_number] = parseInt(event.target.value);
        var end = [startForm, answers];
        console.log(JSON.stringify(end));
    }
    return end;
}

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

// --------- TOTAL SCORE

function score(answers){
    if(Object.values(answers).length > 1){
        var somaScore = Object.values(answers).reduce((a, b) => a + b, 0);
        console.log(somaScore)
    }
}

// --------- 

q1.addEventListener('click', function (event) {
    storeAnswer(1, event)
    // score(answers)
});
q2.addEventListener('click', function (event) {
    storeAnswer(2, event)
    // score(answers)
});
q3.addEventListener('click', function (event) {
    storeAnswer(3, event)
    // score(answers)
});
q4.addEventListener('click', function (event) {
    storeAnswer(4, event)
    // score(answers)
});
q5.addEventListener('click', function (event) {
    storeAnswer(5, event)
    // score(answers)
});
q6.addEventListener('click', function (event) {
    storeAnswer(6, event)
    // score(answers)
});
q7.addEventListener('click', function (event) {
    storeAnswer(7, event)
    // score(answers)
});
q8.addEventListener('click', function (event) {
    storeAnswer(8, event)
    // score(answers)
});
q9.addEventListener('click', function (event) {
    storeAnswer(9, event)
    // score(answers)
});
q10.addEventListener('click', function (event) {
    storeAnswer(10, event)
    // score(answers)
});
q11.addEventListener('click', function (event) {
    storeAnswer(11, event)
    // score(answers)
});
q12.addEventListener('click', function (event) {
    storeAnswer(12, event)
    // score(answers)
});
q13.addEventListener('click', function (event) {
    storeAnswer(13, event)
    // score(answers)
});
q14.addEventListener('click', function (event) {
    storeAnswer(14, event)
    // score(answers)
});
q15.addEventListener('click', function (event) {
    storeAnswer(15, event)
    // score(answers)
});
q16.addEventListener('click', function (event) {
    storeAnswer(16, event)
    // score(answers)
});
q17.addEventListener('click', function (event) {
    storeAnswer(17, event)
    // score(answers)
});
q18.addEventListener('click', function (event) {
    storeAnswer(18, event)
    // score(answers)
});
q19.addEventListener('click', function (event) {
    storeAnswer(19, event)
    // score(answers)
});
q20.addEventListener('click', function (event) {
    storeAnswer(20, event)
    // score(answers)
});
q21.addEventListener('click', function (event) {
    storeAnswer(21, event)
    // score(answers)
});
q21.addEventListener('click', function (event) {
    storeAnswer(21, event)
    // score(answers)
});
q22.addEventListener('click', function (event) {
    storeAnswer(22, event)
    // score(answers)
});
q23.addEventListener('click', function (event) {
    storeAnswer(23, event)
    // score(answers)
});
q24.addEventListener('click', function (event) {
    storeAnswer(24, event)
    // score(answers)
});
q25.addEventListener('click', function (event) {
    storeAnswer(25, event)
    // score(answers)
});
q26.addEventListener('click', function (event) {
    storeAnswer(26, event)
    // score(answers)
});
q26.addEventListener('click', function (event) {
    storeAnswer(26, event)
    // score(answers)
});
q27.addEventListener('click', function (event) {
    storeAnswer(27, event)
    // score(answers)
});
q28.addEventListener('click', function (event) {
    storeAnswer(28, event)
    // score(answers)
});
q29.addEventListener('click', function (event) {
    storeAnswer(29, event)
    // score(answers)
});
q30.addEventListener('click', function (event) {
    storeAnswer(30, event)
    // score(answers)
});
q31.addEventListener('click', function (event) {
    storeAnswer(31, event)
    // score(answers)
});
q32.addEventListener('click', function (event) {
    storeAnswer(32, event)
    // score(answers)
});
q33.addEventListener('click', function (event) {
    storeAnswer(33, event)
    // score(answers)
});
q34.addEventListener('click', function (event) {
    storeAnswer(34, event)
    // score(answers)
});

// --------- PAGINAÇÃO QUIZ

let sub1 = document.getElementById('submit-1');
let sub2 = document.getElementById('submit-2');
let sub3 = document.getElementById('submit-3');
let sub4 = document.getElementById('submit-4');

let back1 = document.getElementById('back-1');
let back2 = document.getElementById('back-2');
let back3 = document.getElementById('back-3');
let back4 = document.getElementById('back-4');

let row1 = document.getElementById('row-box-1');
let row2 = document.getElementById('row-box-2');
let row3 = document.getElementById('row-box-3');
let row4 = document.getElementById('row-box-4');



row1.style.display = 'block';
row2.style.display = 'none';
row3.style.display = 'none';
row4.style.display = 'none';

sub1.style.display = 'block';
sub2.style.display = 'none';
sub3.style.display = 'none';
sub4.style.display = 'none';

back1.style.display = 'none';
back2.style.display = 'none';
back3.style.display = 'none';
back4.style.display = 'none';

sub1.addEventListener('click', function () {
    if (row1.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'block';
        row3.style.display = 'none';
        row4.style.display = 'none';

        sub1.style.display = 'none';
        sub2.style.display = 'block';
        sub3.style.display = 'none';
        sub4.style.display = 'none';

        back1.style.display = 'none';
        back2.style.display = 'block';
        back3.style.display = 'none';
        back4.style.display = 'none';

        growProgressBar('25%');
        window.location.href = "#progress_bar";
    }
})

sub2.addEventListener('click', function () {
    if (row2.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'none';
        row3.style.display = 'block';
        row4.style.display = 'none';

        sub1.style.display = 'none';
        sub2.style.display = 'none';
        sub3.style.display = 'block';
        sub4.style.display = 'none';

    
        growProgressBar('50%');
        window.location.href = "#progress_bar";
    }
})

sub3.addEventListener('click', function () {
    if (row3.style.display === 'block') {
        row1.style.display = 'none';
        row1.style.display = 'none';
        row2.style.display = 'none';
        row3.style.display = 'none';
        row4.style.display = 'block';

        sub1.style.display = 'none';
        sub2.style.display = 'none';
        sub3.style.display = 'none';
        sub4.style.display = 'block';

        growProgressBar('75%');
        window.location.href = "#progress_bar";

    }
})

sub4.addEventListener('click', function () {
    if (row4.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'none';
        row3.style.display = 'none';
        row4.style.display = 'none';
        growProgressBar('100%');
        window.location.href = "/result.html"+"?"+answers;
        // clearHistory();

    }
})

// --------- LIMPAR URL

// function clearHistory() {
//     window.history.pushState("", "", "/");
// }

// --------- PROGRESS BAR

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

// --------- 

// function nextPageEnd(){
//     window.location.href = "/result.html"+"?"+somaScore;
// }

function submitForm(event) {
    event.preventDefault();
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    window.location.href = "/result.html"+"?"+answers;
})