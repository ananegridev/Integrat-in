// RETORNO DO POST
let ilfef = JSON.parse(window.localStorage.getItem('result'));

//  RESULTADO DOS CALCULOS
let high_iif1 = ilfef.results.iif1.orientations.high;
let high_fif1 = ilfef.results.fif1.orientations.high;
let high_c1 = ilfef.results.c1.orientations.high;

let low_iif1 = ilfef.results.iif1.orientations.low;
let low_fif1 = ilfef.results.fif1.orientations.low;
let low_c1 = ilfef.results.c1.orientations.low;

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

// --------- FUNÇÃO PARA PREENCHER O RESULTADO NA TELA 

function landingPage() {

  function printp(desc_score) {
    let result = ""
    if (desc_score.length > 0) {
      desc_score.forEach(element => {
        result = result + '<li>' + element + '</li>'
      });
    }
    return result
  }

  function contentDiv(iif1 = [], fif1 = [], c1 = [], divClass) {
    var divContent = ``;
    var divImg = ``;
    var h4title = ``;
    if (divClass ==="spot-high"){
      divImg = "./src/img/feedback-good.png"
      h4title = "In your company, the integration between Marketing, Logistics and Production is supported by"
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
    }
    else if(divClass ==="spot-low"){
      divImg = "./src/img/feedback-terrible.png"
      h4title = "The cross-functional integration in your company can be improved throgh the following initiatives"
      if (iif1.length > 0 || fif1.length > 0) {
        divContent = '<div class="' + divClass + '" > ' +
          '<div class="spot-title">' +
          '<img src='+ divImg +' alt="">' +
          '<h4>' + h4title + '</h4>' +
          '</div>' +
          '<div class="spot-result-high">' +
          '<ul>' +
          printp(iif1) +
          printp(fif1) +
          '</ul>' +
          '</div>' +
          '</div>';
      }
    }
    else if(divClass ==="spot-conflict"){
      divImg = "./src/img/feedback-alert.svg"
      h4title = "The scarcity of the actions listed above may cause these conflicts within your organization"
      if (c1.length > 0) {
        divContent = '<div class="' + divClass + '" > ' +
          '<div class="spot-title">' +
          '<img src='+ divImg +' alt="">' +
          '<h4>' + h4title + '</h4>' +
          '</div>' +
          '<div class="spot-result-high">' +
          '<ul>' +
          printp(c1) +
          '</ul>' +
          '</div>' +
          '</div>';
      }
    } 
    return divContent
  }

// --------- ADICIONANDO SCORE TOTAL NA LANDINGPAGE

  integrationLevel.innerText = 'SCORE: ' + ilfef.results.integration_level.score.toFixed(1);

  html = contentDiv(high_iif1, high_fif1, high_c1, "spot-high") + 
          contentDiv(iif1 = low_iif1, fif1 = low_fif1, c1 = [],"spot-low") + 
          contentDiv(iif1 = [], fif1 = [], c1 = low_c1, "spot-conflict");
  contentBoxSpots.innerHTML = html;
}

landingPage();

// --------- FUNÇÃO PARA LIMPAR O LOCALSTORAGE DO USUÁRIO

function limparLocalStorage() {
  localStorage.removeItem('company_response')
  localStorage.removeItem('companyid')
  localStorage.removeItem('register')
}

limparLocalStorage();