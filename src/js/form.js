function formStart(){
    let nameValue = document.querySelector(".js-input-name").value;
    let emailValue = document.querySelector(".js-input-email").value;
    let companyValue = document.querySelector(".js-input-company").value;
    let companyNameValue = document.querySelector(".js-input-companyname").value;
    let cnpjValue = document.querySelector(".js-input-cnpj").value;
    let departamentValue = document.querySelector(".js-input-departament").value;
    let sectorValue = document.querySelector(".js-input-sector").value;

    let formPerson = {
        name: nameValue,
        email: emailValue,
        company: companyValue,
        companyName: companyNameValue,
        cnpj: cnpjValue,
        departament: departamentValue,
        sector: sectorValue,
    };

    localStorage.getItem(formPerson);
    return true;
  }

function nextPage(){
    window.location.href = "/quiz.html"
}

// --------- APARECER CAMPO PARA NOVA EMPRESA

// let select = document.getElementById('company');

// let flagCompanyName = document.getElementById('form-flag-company');

// flagCompanyName.style.display = 'none';

// select.addEventListener('change', function() {
//     if(select.value === 'Other'){
//         flagCompanyName.style.display = 'block';
//     }else{
//         flagCompanyName.style.display = 'none';
//     }   
    
// });
