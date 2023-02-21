function formStart(){
    let nameValue = document.querySelector(".js-input-name").value;
    let emailValue = document.querySelector(".js-input-email").value;
    let companyValue = document.querySelector(".js-input-company").value;
    let companyNameValue = document.querySelector(".js-input-companyname").value;
    let domainValue = document.querySelector(".js-input-domain").value;
    let departamentValue = document.querySelector(".js-input-departament").value;
    let sectorValue = document.querySelector(".js-input-sector").value;

    let formPerson = {
        name: nameValue,
        email: emailValue,
        company: companyValue,
        companyName: companyNameValue,
        domain: domainValue,
        departament: departamentValue,
        sector: sectorValue,
    };

    localStorage.getItem(formPerson);
    return formPerson;
  }

// --------- APARECER CAMPO PARA NOVA EMPRESA

// let flagCompanyName = document.getElementById('form-flag-company');

// flagCompanyName.style.display = 'none';

// let select = document.getElementById('company');

// select.addEventListener('change', function() {
//     if(select.value === 'Other'){
//         flagCompanyName.style.display = 'block';
//     }else{
//         flagCompanyName.style.display = 'none';
//     }   
// });

// --------- FORM COMPANY

let formCompany = document.getElementById('form-company');
let formPerson = document.getElementById('form-person');
let select = document.getElementById('company');
formCompany.style.display = 'none';
formPerson.style.display = 'block';

select.addEventListener('change', function() {
    if(select.value === 'Other'){
        formCompany.style.display = 'block';
        formPerson.style.display = 'none';
    }else{
        formCompany.style.display = 'none';
        formPerson.style.display = 'block';
    }   
});

// --------- FORM COMPANY BTN CANCEL

let btnCancel = document.getElementById('btnCancel');

btnCancel.addEventListener('click', function () {
    console.log('oi')
    if (formCompany.style.display === 'block') {
        formPerson.style.display = 'block';
        formCompany.style.display = 'none';
        
        document.querySelector('form').addEventListener('submit', event => {
            event.preventDefault();
        })
    }
})

// --------- VALIDAÇÃO DE CAMPOS DO FORM


// --------- IR PARA PRÓX PÁGINA

function nextPage(){
    window.location.href = "/quiz.html";
    localStorage.getItem(formStart);
}

// --------- API

const url = "https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies";

// let apiCompanyNameValue = document.querySelector(".js-input-companyname").value;
// let apiDomainValue = document.querySelector(".js-input-domain").value;
// let apiSectorValue = document.querySelector(".js-input-sector").value;



async function getAllPosts(){
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    // console.log(Object.keys(data).length);
    // console.log(data[0].company_name);
    // data.sort();

    for (const x of Object.keys(data)) {
        let apiCompanyValue = document.querySelector(".js-input-company");
        console.log(data[x].company_name);
        apiCompanyValue.options[apiCompanyValue.options.length] = new Option(data[x].company_name, data[x].company_name);
    }


    // data.map((post) => {
    //     let apiCompanyValue = document.querySelector(".js-input-company");

    // })
    
}
getAllPosts();

// --------- COLOCANDO SELECT EM ORDEM ALFABETICA

function alphabet(){
    let selectItens = document.querySelector(".js-input-company");
}