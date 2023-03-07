
// const startForm = localStorage.getItem('register')
var answer = JSON.parse(window.localStorage.getItem('register'));


//if (answer.calculation === 'i'){
//    format_answer[result_type] = "individual";
//}
//if(answer.calculation === 'c'){
//    format_answer[result_type] = "company-wide";
//}
//console.log(format_answer)
// console.log('---------------------------------------------------------------')


// calculation: "i"
// company: "BOTICARIO"
// departament: "Marketing and sales"
// email: "anywtf@outlook.com"
// name: "Ana Paula Negri de Macedo"

// var answers = {};

function storeAnswer(question_number, event) {
    if (event.target.type === 'radio') {
        var question = {}
        question[question_number] = parseInt(event.target.value);
        Object.assign(answer, question)
        // answer[question_number] = parseInt(event.target.value);
        // var jsonAnswers = JSON.stringify({answer}); 

    }
    // console.log(JSON.stringify(answer));
    return answer;
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


// --------- 

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

// URL POSTMAN
const url =
    "https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies/fef24e30-4114-4393-88d7-20b7f89ce091/answers";

async function postAnswer(answer, event) {

    var result_type = {}
    if (answer.calculation === 'i') { result_type["result_type"] = "individual"; }
    if (answer.calculation === 'c') { result_type["result_type"] = "company-wide"; }
    var format_answer = {}
    Object.assign(format_answer, result_type)
    delete answer.calculation
    Object.assign(format_answer, { answer })

    let teste = JSON.stringify(format_answer);
    console.log(teste)

    if (event.target.type === 'submit') {

        // var raw = JSON.stringify({
        //     "result_type": "individual",
        //     "answer": {
        //         "name": "saulo coutinho",
        //         "email": "some@email.com",
        //         "department": "marketing",
        //         "FIF1.1": 6,
        //         "FIF1.2": 5,
        //         "FIF1.3": 3,
        //         "FIF1.4": 3,
        //         "FIF1.5": 7,
        //         "FIF1.6": 7,
        //         "FIF1.7": 3,
        //         "FIF1.10": 3,
        //         "IIF1.2": 5,
        //         "IIF1.3": 6,
        //         "IIF1.5": 6,
        //         "IIF1.6": 7,
        //         "IIF1.7": 3,
        //         "IIF1.8": 5,
        //         "IIF1.9": 3,
        //         "IIF1.10": 3,
        //         "IIF1.11": 3,
        //         "IIF1.12": 5,
        //         "IIF1.13": 3,
        //         "C1.1": 3,
        //         "C1.2": 7,
        //         "C1.3": 3,
        //         "C1.4": 7,
        //         "C1.5": 3,
        //         "C1.6": 4,
        //         "C1.7": 5,
        //         "C1.8": 3,
        //         "C1.9": 6,
        //         "C1.10": 3,
        //         "C1.11": 7,
        //         "C1.12": 3,
        //         "IM1.1": 7,
        //         "IM1.2": 3,
        //         "IM1.3": 3
        //     }
        // });

        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Request-Method", "POST", "Content-Type", "application/json", "Access-Control-Allow-Origin", "*","Access-Control-Allow-Origin", "https://127.0.0.1:5500");
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Content-Length", "");
        // myHeaders.append("Host", "");
        // myHeaders.append("User-Agent","PostmanRuntime/7.31.1");
        // myHeaders.append("Accept","*/*");
        // myHeaders.append("Accept-Encoding","gzip, deflate, br");
        // myHeaders.append("Connection","keep-alive");


        var requestOptions = {
            method: 'POST',
            // mode: "no-cors",
            dataType: 'json',
            headers: myHeaders,
            body: JSON.stringify(format_answer),
            redirect: 'follow'
        };

        fetch("https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies/fef24e30-4114-4393-88d7-20b7f89ce091/answers", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }




    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Connection", "keep-alive");
    // myHeaders.append("x-amzn-RequestId", "11c436f5-e53a-4c9e-b719-250a146c3cb6");
    // myHeaders.append("Access-Control-Allow-Origin","*");
    // myHeaders.append("x-amz-apigw-id","BVFvVFDOoAMF7IA=");
    // myHeaders.append("X-Amzn-Trace-Id","Root=1-64051cc8-6c49f7aa4c541e0f1b39cfa7;Sampled=0");

    // if (event.target.type === 'submit') {
    //     var requestOptions = {
    //         method: 'POST',
    //         mode: "no-cors",
    //         headers: myHeaders,
    //         body: body
    //     };

    //     fetch(url, requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));


    //     }

}

// --------- PAGINAÇÃO QUIZ

let sub1 = document.getElementById('submit-1');
let sub2 = document.getElementById('submit-2');
let sub3 = document.getElementById('submit-3');
let finish = document.getElementById('submit-4');

finish.addEventListener('click', function (event) {
    postAnswer(answer, event)
});

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

row1.style.display = 'block';
row2.style.display = 'none';
row3.style.display = 'none';
row4.style.display = 'none';

boxBtn1.style.display = 'block';
boxBtn2.style.display = 'none';
boxBtn3.style.display = 'none';

finish.style.display = 'none';
back4.style.display = 'none';

sub1.addEventListener('click', function () {
    if (row1.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'block';
        row3.style.display = 'none';
        row4.style.display = 'none';

        boxBtn1.style.display = 'none';
        boxBtn2.style.display = 'block';
        boxBtn3.style.display = 'none';

        finish.style.display = 'none';
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


        boxBtn1.style.display = 'none';
        boxBtn2.style.display = 'none';
        boxBtn3.style.display = 'block';

        finish.style.display = 'none';
        back4.style.display = 'none';

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

        boxBtn1.style.display = 'none';
        boxBtn2.style.display = 'none';
        boxBtn3.style.display = 'none';

        finish.style.display = 'block';
        back4.style.display = 'block';

        growProgressBar('75%');
        window.location.href = "#progress_bar";

    }
})

finish.addEventListener('click', function () {
    if (row4.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'none';
        row3.style.display = 'none';
        row4.style.display = 'none';
        growProgressBar('100%');

    }
})

// BOTÃO BACK
back2.addEventListener('click', function () {
    if (row2.style.display === 'block') {
        row1.style.display = 'block';
        row2.style.display = 'none';
        row3.style.display = 'none';
        row4.style.display = 'none';

        boxBtn1.style.display = 'block';
        boxBtn2.style.display = 'none';
        boxBtn3.style.display = 'none';

        finish.style.display = 'none';
        back4.style.display = 'none';

        growProgressBar('0%');
        window.location.href = "#progress_bar";

    }
})

back3.addEventListener('click', function () {
    if (row3.style.display === 'block') {
        row1.style.display = 'none';
        row2.style.display = 'block';
        row3.style.display = 'none';
        row4.style.display = 'none';

        boxBtn1.style.display = 'none';
        boxBtn2.style.display = 'block';
        boxBtn3.style.display = 'none';

        finish.style.display = 'none';
        back4.style.display = 'none';

        growProgressBar('25%');
        window.location.href = "#progress_bar";

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
        boxBtn3.style.display = 'block';

        finish.style.display = 'none';
        back4.style.display = 'none';

        growProgressBar('100%');
        window.location.href = "#progress_bar";

    }
})

// --------- PROGRESS BAR

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

// --------- RETIRANDO PREVENT DEFAULT DO FORM
function submitForm(event) {
    event.preventDefault();
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    // window.location.href = "/result.html";
})
