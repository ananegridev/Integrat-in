// RETORNO DO POST
let ilfef = JSON.parse(window.localStorage.getItem('result'));

//  RESULTADO DOS CALCULOS
let high_iif1 = ilfef.results.iif1.orientations.high;
let high_fif1 = ilfef.results.fif1.orientations.high;
let high_c1 = ilfef.results.c1.orientations.high;

let low_iif1 = ilfef.results.iif1.orientations.low;
let low_fif1 = ilfef.results.fif1.orientations.low;
let low_c1 = ilfef.results.c1.orientations.low;

// console.log(typeof high_iif1)
// HTML VIA JS
let html = ``;

//SELECIONANDO O COMPONENTE PRA INSERIR HTML 
const contentBoxSpots = document.querySelector(".content__box-spots");

//SELECIONANDO COMPONENTE DO RESULTADO DO SCORE
const integrationLevel = document.querySelector('.integration-level');


// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

function landingPage() {

  function printp(desc_score) {
    let result = ""
    if (desc_score.length > 0) {
      desc_score.forEach(element => {
        result = result + '<li>' + element + '</li>'
      });
    }
    // else{
    //   result = result + '<li>'+'Nothing to add'+'</li>'
    // }
    return result
  }



  function contentDiv(iif1, fif1, c1, divClass) {
    var divContent = ``;
    var divImg = ``;
    var h4title = ``;
    if (divClass ==="spot-high"){
      divImg = "./src/img/feedback-good.png"
      h4title = "In your company, the integration between Marketing, Logistics and Production is supported by"
    }
    else if(divClass ==="spot-low"){
      divImg = "./src/img/feedback-terrible.png"
      h4title = "The cross-functional integration in your company can be improved throgh the following initiatives"
    }
    if (iif1.length > 0 || fif1.length > 0 || c1.length > 0) {
      divContent = '<div class="' + divClass + '" > ' +
        '<div class="spot-title">' +
        '<img src='+ divImg +' alt="">' +
        '<h4>' + h4title + '</h4>' +
        '</div>' +
        '<div class="spot-result-high">' +
        '<ul>' +
        printp(iif1) +
        printp(fif1) +
        printp(c1) +
        '</ul>' +
        '</div>' +
        '</div>';
    }
    return divContent
  }


  // ADICIONANDO SCORE TOTAL NA LANDINGPAGE
  integrationLevel.innerText = 'SCORE: ' + ilfef.results.integration_level.score.toFixed(1);

  /* REFINAMENTO */

  //   html =+ '<section class="content__box-spots">' +
  //   // '<h2>Integration level for each factor</h2>' +
  //   '<section class="spot">' +
  //   '<div class="spot-card-text">' +
  //     '<h4>Formal Integration Factors (FIF)</h4>' +
  //     '<h4 class="spot-high-title-score">Score '+ ilfef.results.iif1.score.toFixed(1) +'</h4>'+
  //   '</div>' +
  //    ' <div class="spot-high">' +
  //       '<div class="spot-title">' +
  //         '<img src="./src/img/feedback-good.png" alt="">' +
  //         '<h4>In your company, the integration between Marketing, Logistics and Production is supported by</h4>' +
  //       '</div>' +
  //       '<div class="spot-result-high">' +
  //       '<ul>'+
  //         printp(high_iif1) +
  //       '</ul>'+
  //       '</div>' +
  //     '</div>' +
  //     '<div class="spot-low">' +
  //      ' <div class="spot-title">' +
  //        '<img src="./src/img/feedback-terrible.png" alt="">' +
  //         '<h4>The cross-functional integration in your company can be improved throgh the following initiatives</h4>' +
  //       '</div>' +
  //       '<div class="spot-result-low">' +
  //       '<ul>'+
  //         printp(low_iif1)+
  //       '</ul>'+

  //       '</div>' +
  //     '</div>' +
  //     '</section>' +

  //     // fif1
  //     '<section class="spot">' +
  //     '<div class="spot-card-text">' +
  //       '<h4>Formal Integration Factors (FIF)</h4>' +
  //       '<h4 class="spot-high-title-score">Score '+ ilfef.results.fif1.score.toFixed(1) +'</h4>'+
  //     '</div>' +
  //      ' <div class="spot-high">' +
  //         '<div class="spot-title">' +
  //           '<img src="./src/img/feedback-good.png" alt="">' +
  //           '<h4>In your company, the integration between Marketing, Logistics and Production is supported by</h4>' +
  //         '</div>' +
  //         '<div class="spot-result-high">' +
  //         '<ul>'+
  //           printp(high_fif1) +
  //         '</ul>'+
  //         '</div>' +
  //       '</div>' +
  //       '<div class="spot-low">' +
  //        ' <div class="spot-title">' +
  //          '<img src="./src/img/feedback-terrible.png" alt="">' +
  //           '<h4>The cross-functional integration in your company can be improved throgh the following initiatives</h4>' +
  //         '</div>' +
  //         '<div class="spot-result-low">' +
  //         '<ul>'+
  //           printp(low_fif1)+
  //         '</ul>'+
  //         '</div>' +
  //       '</div>' +
  //       '</section>' + 

  //     // c1
  //     '<section class="spot">' +
  //     '<div class="spot-card-text">' +
  //       '<h4>Formal Integration Factors (FIF)</h4>' +
  //       '<h4 class="spot-high-title-score">Score '+ ilfef.results.c1.score.toFixed(1) +'</h4>'+
  //     '</div>' +
  //      ' <div class="spot-high">' +
  //         '<div class="spot-title">' +
  //           '<img src="./src/img/feedback-good.png" alt="">' +
  //           '<h4>In your company, the integration between Marketing, Logistics and Production is supported by</h4>' +
  //         '</div>' +
  //         '<div class="spot-result-high">' +
  //         '<ul>'+
  //           printp(high_c1) +
  //         '</ul>'+
  //         '</div>' +
  //       '</div>' +
  //       '<div class="spot-low">' +
  //        ' <div class="spot-title">' +
  //          '<img src="./src/img/feedback-terrible.png" alt="">' +
  //           '<h4>The cross-functional integration in your company can be improved throgh the following initiatives</h4>' +
  //         '</div>' +
  //         '<div class="spot-result-low">' +
  //         '<ul>'+
  //           printp(low_c1)+
  //         '</ul>'+
  //         '</div>' +
  //       '</div>' +
  //       '</section>';


  // html = 
  // '<div class="spot-high">' +
  // '<div class="spot-title">' +
  //   '<img src="./src/img/feedback-good.png" alt="">' +
  //   '<h4>In your company, the integration between Marketing, Logistics and Production is supported by</h4>' +
  // '</div>' +
  // '<div class="spot-result-high">' +
  //   '<ul>' +
  //     printp(high_iif1) +
  //     printp(high_fif1) +
  //     printp(high_c1) +
  //   '</ul>' +
  // '</div>' +
  // '</div>' +

  // '<div class="spot-low">' +
  // '<div class="spot-title">' +
  //   '<img src="./src/img/feedback-terrible.png" alt="">' +
  //   '<h4>The cross-functional integration in your company can be improved throgh the following initiatives</h4></h4>' +
  // '</div>' +
  // '<div class="spot-result-low">' +
  //   '<ul>' +
  //     printp(low_iif1) +
  //     printp(low_fif1) +
  //     printp(low_c1) +
  //   '</ul>' +
  // '</div>' 
  // ;

  html = contentDiv(high_iif1, high_fif1, high_c1, "spot-high") + contentDiv(low_iif1, low_fif1, low_c1, "spot-low");
  contentBoxSpots.innerHTML = html;

}
landingPage();

