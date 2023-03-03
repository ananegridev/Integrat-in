// --------- VÁRIAVEIS 

//FORM
let form = document.querySelector("#form");

// CAMPOS FORMULÁRIO

let company = document.querySelector(".js-input-company");
let newCompany = document.querySelector(".js-input-companyname");
let domain = document.querySelector(".js-input-domain");
let sector = document.querySelector(".js-input-sector");
let name = document.querySelector(".js-input-name");
let email = document.querySelector(".js-input-email");
let departament = document.querySelector(".js-input-departament");

// DIV SEPARAÇÃO FORMULARIOS

let rowSelectCompany = document.querySelector(".row-select-company");
let rowRegisterCompany = document.querySelector(".row-register-company");
let rowRegisterPerson = document.querySelector(".row-register-person");

// BUTTONS 
let btnRegisterCompany = document.getElementById("btn-register-company");

// URL POSTMAN
const url =
  "https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies";

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// --------- JOGAR DADOS PARA PROX PÁGINA

function formStart() {
  let nameValue = document.querySelector(".js-input-name").value;
  let emailValue = document.querySelector(".js-input-email").value;
  let companyValue = document.querySelector(".js-input-company").value;
  let companyNameValue = document.querySelector(".js-input-companyname").value;
  let domainValue = document.querySelector(".js-input-domain").value;
  let departamentValue = document.querySelector(".js-input-departament").value;
  let sectorValue = document.querySelector(".js-input-sector").value;

  

  let formPerson = {
    name: namevalue,
    email: emailValue,
    company: companyValue,
    domain: domainValue,
    sector: sectorValue,
  };

  console.log(formPerson);
  localStorage.getItem(formPerson);
  return formPerson;
}

// --------- APARECER CAMPO PARA NOVA EMPRESA

rowRegisterCompany.style.display = 'none';
rowRegisterPerson.style.display = 'none';

company.addEventListener('change', function() {
    if(company.value === 'Add'){
      rowRegisterCompany.style.display = 'block';
      rowRegisterPerson.style.display = 'none';
    }else if(company.value != 'Add'){
      rowRegisterCompany.style.display = 'none';
      rowRegisterPerson.style.display = 'block';
    }else{
      rowRegisterCompany.style.display = 'none';
      rowRegisterCompany.style.display = 'none';
    }
});

company.addEventListener('change', function() {
  if(company.value === 'None'){
    rowRegisterCompany.style.display = 'none';
    rowRegisterPerson.style.display = 'none';
  }
});

// --------- CANCELAR SUBMIT

function cancelSubmitForm() {
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    jsonNewCompany();
    postNewCompany();
    document.location.reload();
    // return false;
  });
}

// --------- API: PUXAR AS COMPANYS CADASTRADAS NO SELECT

async function getCompanies() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  // console.log(Object.keys(data).length);
  // console.log(data[0].company_name);
  // data.sort();
  for (const x of Object.keys(data)) {
    let apiCompanyValue = document.querySelector(".js-input-company");
    // console.log(data[x].company_name);
    apiCompanyValue.options[apiCompanyValue.options.length] = new Option(
      data[x].company_name,
      data[x].company_name
    );
  }
}

getCompanies();

// --------- OBJ NEW COMPANY 

function jsonNewCompany(){
  let registerNewCompany = {
    company_name: newCompany.value,
    domain: domain.value,
    sector: sector.value,
  };
  registerNewCompany = JSON.stringify(registerNewCompany);
  console.log(registerNewCompany);
  return registerNewCompany;
}

// --------- API: CADASTRO NOVA EMPRESA POSTMAN

function postNewCompany(){
      fetch(url, {
    method: "POST",
    mode:"no-cors",

    headers: {
      "Access-Control-Request-Method": "POST",
      "Content-Type": "application/json",
      "Content-Length": "189",
      "Connection": "keep-alive",
      "x-amzn-RequestId": "6c5844fc-ec35-44c1-92c6-148b6d5c599b",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Origin": "https://127.0.0.1:5500",
      // "x-amz-apigw-id": "Azc6jHfgIAMFlMA=",
      "X-Amzn-Trace-Id": "Root=1-63f7a843-26fa33d11deb0e5066ae33bf;Sampled=0",
    },
    body: jsonNewCompany(),
  })

    .then(function(response){
      console.log(response);})
    .then((json) => console.log(json))
    .catch(error => console.error('Error:', error)); 
}

// --------- CÓDIGO PARA USAR DEPOIS

// const urlSearchParams = new URLSearchParams(window.location.search);
