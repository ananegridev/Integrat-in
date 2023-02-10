

// ----------------

// --------- PEGANDO DADOS DO START.HTML VIA URL

let resultURL = new URL(window.location.href);
let objResult = Object.fromEntries(resultURL.searchParams);

function score(objResult){
  if(Object.values(objResult).length > 1){
      var somaScore = Object.values(objResult).reduce((a, b) => a + b, 0);
      console.log(somaScore)
  }
}


// --------- 

// function getInfoBasedScore(){
//     if(score() <= 34){
//         let scoreInfo = score();
//         alert('Stromgly Disagree')
//     }else if (score() <= 102){
//         let scoreInfo = score();
//         alert('Disagree')
//     }else if(score() <= 136){
//         let scoreInfo = score();
//         alert('Neutral')
//     }else if(score() <= 204){
//         let scoreInfo = score();
//         alert('Agree')
//     }else{
//         let scoreInfo = score();
//         alert('Stromgly Agree')
//     }
//     return scoreInfo;
// }