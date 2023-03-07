// JSON PRO POST

// let result = JSON.parse(window.localStorage.getItem('result'));

const pronto = JSON.stringify({
  "result_type": "individual",
  "answer": {
    "name": "Ana Paula",
    "email": "apaulan@minsalt.com",
    "company": "BOTICARIO",
    "departament": "Customer service",
    "FIF1.1": 1,
    "FIF1.2": 1,
    "FIF1.3": 1,
    "FIF1.4": 1,
    "FIF1.5": 1,
    "FIF1.6": 1,
    "FIF1.7": 1,
    "FIF1.10": 1,
    "IIF1.2": 1,
    "IIF1.3": 2,
    "IIF1.5": 1,
    "IIF1.6": 1,
    "IIF1.7": 1,
    "IIF1.8": 1,
    "IIF1.9": 1,
    "IIF1.10": 1,
    "IIF1.11": 1,
    "IIF1.12": 1,
    "IIF1.13": 1,
    "C1.1": 1,
    "C1.2": 1,
    "C1.3": 1,
    "C1.4": 1,
    "C1.5": 1,
    "C1.6": 1,
    "C1.7": 1,
    "C1.8": 1,
    "C1.9": 1,
    "C1.10": 1,
    "C1.11": 1,
    "C1.12": 1,
    "IM1.1": 1,
    "IM1.2": 1,
    "IM1.3": 1
  }
});

// ----------------

// ---------------

// URL POSTMAN
const url =
  "https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies/fef24e30-4114-4393-88d7-20b7f89ce091/answers";

async function postAnswer() {

  let myHeaders = new Headers();
  myHeaders.append("Access-Control-Request-Method", "POST", "Content-Type", "application/json", "Access-Control-Allow-Origin", "*", "Access-Control-Allow-Origin", "https://127.0.0.1:5500");

  let requestOptions = {
    method: 'POST',
    dataType: 'json',
    headers: myHeaders,
    body: pronto,
    redirect: 'follow'
  };

  fetch(url, requestOptions)
    .then(response => response.text())
    // .then(result => console.log(result))
    .then(function (result) {
      // console.log(result);
      
      let html = ``;

      let ilfef = JSON.parse(result);
      // ilfef = JSON.parse(result);
      // console.log(ilfef)

      let high_iif1 = ilfef.results.iif1.orientations.high
      let low_iif1 =  ilfef.results.iif1.orientations.low
      let high_fif1 = ilfef.results.fif1.orientations.high
      let low_fif1 =  ilfef.results.fif1.orientations.low
      let high_c1 = ilfef.results.c1.orientations.high
      let low_c1 =  ilfef.results.c1.orientations.low

      
      //SCORE TOTAL
      // console.log(ilfef.results.integration_level.score.toFixed(2));
      
      // TEXTO EXPLICATIVO
      // console.log(ilfef.results.integration_level.orientations); 

      //iif1 SCORE
      // console.log(ilfef.results.iif1.score.toFixed(2));

      //fif1 SCORE
      // console.log(ilfef.results.fif1.score.toFixed(2));

      //c1 SCORE
      // console.log(ilfef.results.c1.score.toFixed(2));

      function printp(desc_score){
        let result = ""
        if (desc_score.length>0){
            desc_score.forEach(element => {
            result = result + '<p>'+element+'</p>'
          });
        }
        else{
          result = result + '<p>'+'Nothing to add'+'</p>'
        }
        return result

      }

      // -----------------------------------------------
      // -----------------------------------------------
      // -----------------------------------------------
      // -----------------------------------------------
      // -----------------------------------------------

      const contentBoxSpots = document.querySelector(".content__box-spots"); 

      const integrationLevel = document.querySelector('.integration-level');
      integrationLevel.innerText = 'SCORE: ' + ilfef.results.integration_level.score.toFixed(2);

      /* para cada item cria um card novo na tela */

        html =+ 
        '<section class="content__box-spots">' +
        '<h2>Integration level for each factor</h2>' +
        '<section class="spot">' +
        '<div class="spot-card-text">' +
          '<h4>Formal Integration Factors (FIF)</h4>' +
          '<h4 class="spot-high-title-score">Score '+ ilfef.results.iif1.score.toFixed(2) +'</h4>'+
        '</div>' +
         ' <div class="spot-high">' +
            '<div class="spot-title">' +
              '<img src="./src/img/feedback-good.png" alt="">' +
              '<h4>HIGH</h4>' +
            '</div>' +
            '<div class="spot-result-high">' +
              printp(high_iif1) +
            '</div>' +
          '</div>' +
          '<div class="spot-low">' +
           ' <div class="spot-title">' +
             '<img src="./src/img/feedback-terrible.png" alt="">' +
              '<h4>LOW</h4>' +
            '</div>' +
            '<div class="spot-result-low">' +
            printp(low_iif1)+
            '</div>' +
          '</div>' +
          '</section>' +

          // fif1
          '<section class="spot">' +
          '<div class="spot-card-text">' +
            '<h4>Formal Integration Factors (FIF)</h4>' +
            '<h4 class="spot-high-title-score">Score '+ ilfef.results.fif1.score.toFixed(2) +'</h4>'+
          '</div>' +
           ' <div class="spot-high">' +
              '<div class="spot-title">' +
                '<img src="./src/img/feedback-good.png" alt="">' +
                '<h4>HIGH</h4>' +
              '</div>' +
              '<div class="spot-result-high">' +
                printp(high_fif1) +
              '</div>' +
            '</div>' +
            '<div class="spot-low">' +
             ' <div class="spot-title">' +
               '<img src="./src/img/feedback-terrible.png" alt="">' +
                '<h4>LOW</h4>' +
              '</div>' +
              '<div class="spot-result-low">' +
              printp(low_fif1)+
              '</div>' +
            '</div>' +
            '</section>' + 

          // c1
          '<section class="spot">' +
          '<div class="spot-card-text">' +
            '<h4>Formal Integration Factors (FIF)</h4>' +
            '<h4 class="spot-high-title-score">Score '+ ilfef.results.c1.score.toFixed(2) +'</h4>'+
          '</div>' +
           ' <div class="spot-high">' +
              '<div class="spot-title">' +
                '<img src="./src/img/feedback-good.png" alt="">' +
                '<h4>HIGH</h4>' +
              '</div>' +
              '<div class="spot-result-high">' +
                printp(high_c1) +
              '</div>' +
            '</div>' +
            '<div class="spot-low">' +
             ' <div class="spot-title">' +
               '<img src="./src/img/feedback-terrible.png" alt="">' +
                '<h4>LOW</h4>' +
              '</div>' +
              '<div class="spot-result-low">' +
              printp(low_c1)+
              '</div>' +
            '</div>' +
            '</section>' 
       
          
        ;

       contentBoxSpots.innerHTML = html;

    })
    .catch(error => console.log('error', error));
}

postAnswer();