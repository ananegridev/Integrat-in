
// function parseJSON(){
//     resultadoFinal = ddd.concat(answers());
//     console.log(resultadoFinal);
//     return true;

// }


var objURL = new URL(window.location.href);
let startForm = Object.fromEntries(objURL.searchParams);
let ddd = JSON.stringify(startForm);
console.log(JSON.stringify(startForm));

let today = new Date();
// let today = date.getDate();
console.log(today.toLocaleDateString());

// let teste = startForm.concat(answers);

// var end = [startForm, answers];

// --- SALVANDO QUIZ

var answers = {}; // Criado OBJ 

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        // console.log(event.target.value);
        answers[''+question_number] = parseInt(event.target.value);
        // console.log(answers);
        // console.log(JSON.stringify(answers));
        console.log(answers);
        
        var end = [startForm, answers];
        console.log(end);

        console.log(JSON.stringify(end));
    }
}



var q1 = document.getElementById('question-1');
var q2 = document.getElementById('question-2');
var q3 = document.getElementById('question-3');
// var q4 = document.getElementById('question-4');
// var q5 = document.getElementById('question-5');
// var q6 = document.getElementById('question-6');
// var q7 = document.getElementById('question-7');
// var q8 = document.getElementById('question-8');
// var q9 = document.getElementById('question-9');
// var q10 = document.getElementById('question-10');
// var q11 = document.getElementById('question-11');
// var q12 = document.getElementById('question-12');
// var q13 = document.getElementById('question-13');
// var q14 = document.getElementById('question-14');
// var q15 = document.getElementById('question-15');
// var q16 = document.getElementById('question-16');
// var q17 = document.getElementById('question-17');
// var q18 = document.getElementById('question-18');
// var q19 = document.getElementById('question-19');
// var q20 = document.getElementById('question-20');
// var q21 = document.getElementById('question-21');
// var q22 = document.getElementById('question-22');
// var q23 = document.getElementById('question-23');
// var q24 = document.getElementById('question-24');
// var q25 = document.getElementById('question-25');
// var q26 = document.getElementById('question-26');
// var q27 = document.getElementById('question-27');
// var q28 = document.getElementById('question-28');
// var q29 = document.getElementById('question-29');
// var q30 = document.getElementById('question-30');
// var q31 = document.getElementById('question-31');
// var q32 = document.getElementById('question-32');
// var q33 = document.getElementById('question-33');
// var q34 = document.getElementById('question-34');


q1.addEventListener('click', function(event){
    storeAnswer(1, event)
});
q2.addEventListener('click', function(event){
    storeAnswer(2, event)
});
q3.addEventListener('click', function(event){
    storeAnswer(3, event)
});
// q4.addEventListener('click', function(event){
//     storeAnswer(4, event)
// });
// q5.addEventListener('click', function(event){
//     storeAnswer(5, event)
// });
// q6.addEventListener('click', function(event){
//     storeAnswer(6, event)
// });
// q7.addEventListener('click', function(event){
//     storeAnswer(7, event)
// });
// q8.addEventListener('click', function(event){
//     storeAnswer(8, event)
// });
// q9.addEventListener('click', function(event){
//     storeAnswer(9, event)
// });
// q10.addEventListener('click', function(event){
//     storeAnswer(10, event)
// });
// q11.addEventListener('click', function(event){
//     storeAnswer(11, event)
// });
// q12.addEventListener('click', function(event){
//     storeAnswer(12, event)
// });
// q13.addEventListener('click', function(event){
//     storeAnswer(13, event)
// });
// q14.addEventListener('click', function(event){
//     storeAnswer(14, event)
// });
// q15.addEventListener('click', function(event){
//     storeAnswer(15, event)
// });
// q16.addEventListener('click', function(event){
//     storeAnswer(16, event)
// });
// q17.addEventListener('click', function(event){
//     storeAnswer(17, event)
// });
// q18.addEventListener('click', function(event){
//     storeAnswer(18, event)
// });
// q19.addEventListener('click', function(event){
//     storeAnswer(19, event)
// });
// q20.addEventListener('click', function(event){
//     storeAnswer(20, event)
// });
// q21.addEventListener('click', function(event){
//     storeAnswer(21, event)
// });
// q21.addEventListener('click', function(event){
//     storeAnswer(21, event)
// });
// q22.addEventListener('click', function(event){
//     storeAnswer(22, event)
// });
// q23.addEventListener('click', function(event){
//     storeAnswer(23, event)
// });
// q24.addEventListener('click', function(event){
//     storeAnswer(24, event)
// });
// q25.addEventListener('click', function(event){
//     storeAnswer(25, event)
// });
// q26.addEventListener('click', function(event){
//     storeAnswer(26, event)
// });
// q26.addEventListener('click', function(event){
//     storeAnswer(26, event)
// });
// q27.addEventListener('click', function(event){
//     storeAnswer(27, event)
// });
// q28.addEventListener('click', function(event){
//     storeAnswer(28, event)
// });
// q29.addEventListener('click', function(event){
//     storeAnswer(29, event)
// });
// q30.addEventListener('click', function(event){
//     storeAnswer(30, event)
// });
// q31.addEventListener('click', function(event){
//     storeAnswer(31, event)
// });
// q32.addEventListener('click', function(event){
//     storeAnswer(32, event)
// });
// q33.addEventListener('click', function(event){
//     storeAnswer(33, event)
// });
// q34.addEventListener('click', function(event){
//     storeAnswer(34, event)
// });








