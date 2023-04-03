//FORM
const form = document.querySelector("[data-formulario]");

// CAMPOS FORMULÁRIO
let company = document.querySelector(".js-input-company");
let newCompany = document.querySelector(".js-input-companyname");
let domain = document.querySelector(".js-input-domain");
let sector = document.querySelector(".js-input-sector");
let fullname = document.querySelector(".js-input-name");
let email = document.querySelector(".js-input-email");
let departament = document.querySelector(".js-input-departament");
let calculation = document.querySelector(".js-input-calculation");

// TODOS ELEMENTOS COM REQUIRED
let inputsFormRequired = document.querySelectorAll("[required]");

// TODOS ELEMENTOS
let inputsNewCompany = document.querySelectorAll("[data-new-company]");

// DIV SEPARAÇÃO FORMULARIOS

let rowSelectCompany = document.querySelector(".row-select-company");
let rowRegisterCompany = document.querySelector(".row-register-company");
let rowRegisterPerson = document.querySelector(".row-register-person");

// BUTTONS 
let btnRegisterCompany = document.getElementById("btn-register-company");
let btnNext = document.getElementById("btn-next");

// REFERENTE AO TOOLTIP
const icoTooltip = document.querySelector('.img__tooltip');
const textTooltip = document.querySelector('.tooltip__text');

// URL POSTMAN
const url =
  "https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies";

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// --------- CANCELAR SUBMIT DEFAULT DO FORM

function cancelSubmitForm() {
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
  });
}

// --------- SELECT YOUR COMPANY SELECIONADO

company.addEventListener('change', function () {
  if (company.value === 'None') {
    rowRegisterCompany.style.display = 'none';
    rowRegisterPerson.style.display = 'none';
  }
});

// --------- APARECER CAMPO PARA NOVA EMPRESA

rowRegisterCompany.style.display = 'none';
rowRegisterPerson.style.display = 'none';

company.addEventListener('change', function () {
  if (company.value === 'Add') {
    rowRegisterCompany.style.display = 'flex';
    rowRegisterPerson.style.display = 'none';
  } else if (company.value != 'Add') {
    rowRegisterCompany.style.display = 'none';
    rowRegisterPerson.style.display = 'block';
  } else {
    rowRegisterCompany.style.display = 'none';
    rowRegisterPerson.style.display = 'none';
  }
});

company.addEventListener('change', function () {
  if (company.value === 'None') {
    rowRegisterCompany.style.display = 'none';
    rowRegisterPerson.style.display = 'none';
  }
});

// --------- API: PUXAR AS COMPANYS CADASTRADAS NO SELECT

async function getCompanies() {
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  var data_companyes = Object.values(data)
  localStorage.setItem("company_response", JSON.stringify(data_companyes));
  
  
  for (const x of Object.keys(data)) {
    let apiCompanyValue = document.querySelector(".js-input-company");
    apiCompanyValue.options[apiCompanyValue.options.length] = new Option(
      data[x].company_name
    );
  }
  if (data.length > 0) {
    loader = document.querySelector('.container-load');
    loader.style.display = 'none';
  }
}

getCompanies();

// --------- OBJ NEW COMPANY 

function jsonNewCompany() {
  let registerNewCompany = {
    company_name: newCompany.value,
    domain: domain.value,
    sector: sector.value,
  };
  registerNewCompany = JSON.stringify(registerNewCompany);
  console.log(registerNewCompany.company_name);
  return registerNewCompany;
}

// --------- API: CADASTRO NOVA EMPRESA POSTMAN

function postNewCompany() {
  fetch(url, {
    method: "POST",
    mode: "no-cors",

    headers: {
      "Access-Control-Request-Method": "POST",
      "Content-Type": "application/json",
      "Content-Length": "189",
      "Connection": "keep-alive",
      "x-amzn-RequestId": "6c5844fc-ec35-44c1-92c6-148b6d5c599b",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Origin": "https://127.0.0.1:5500",
      "X-Amzn-Trace-Id": "Root=1-63f7a843-26fa33d11deb0e5066ae33bf;Sampled=0",
    },
    body: jsonNewCompany(),
  })
    .then(function () {
      window.location.href = "./start.html";
    })
}

// --------- EVENTO PARA ENVIAR O POST E RECARREGAR PÁGINA 

btnRegisterCompany.addEventListener("click", function () {
  jsonNewCompany();
  getCompanies();
});

// --------- REFAZENDO SUBMIT DO FORM PARA POPULAR OS DADOS NO LOCALSTORAGE

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameValue = document.querySelector(".js-input-name").value;
  let emailValue = document.querySelector(".js-input-email").value;
  let companyValue = document.querySelector(".js-input-company").value;
  let departamentValue = document.querySelector(".js-input-departament").value;
  let calculationValue = document.querySelector(".js-input-calculation").value;

  const listRegister = {
    name: nameValue,
    email: emailValue,
    company: companyValue,
    departament: departamentValue,
    calculation: calculationValue
  };
  let company_data = JSON.parse(window.localStorage.getItem('company_response'));
  let nameCompany = listRegister.company;
  var id_company = company_data.find(x => x.company_name === nameCompany).company_id;

  localStorage.setItem("companyid", JSON.stringify(id_company));
  localStorage.setItem("register", JSON.stringify(listRegister));

  window.location.href = "./quiz.html";
});

/*
--------------------------------------------------------------------
--------------------------------------------------------------------
----- v a l i d a ç ã o  d o s  c a m p o s  f o r m ---------------
--------------------------------------------------------------------
--------------------------------------------------------------------

*/

// --------- VALIDAÇÃO CAMPO NULO FORMULÁRIO ADD NEW COMPANY

let errorNewCompany = document.querySelector('.text-error-newcompany');
let errorDomain = document.querySelector('.text-error-domain');
let errorSector = document.querySelector('.text-error-sector');

function verifyFields() {
  if (newCompany.value.trim().length === 0) {
    newCompany.style.border = '2px solid red';
    errorNewCompany.innerText = 'Company name field cannot be empty.';

  }

  if (sector.value === 'None') {
    sector.style.border = '2px solid red';
    errorSector.innerText = 'Sector field cannot be empty.';
  }

  if (domain.value.trim().length === 0) {
    domain.style.border = '2px solid red';
    errorDomain.innerText = 'Domain field cannot be empty.';
  }

  if (newCompany.value.trim().length > 0 || sector.value != 'None' || domain.value.trim().length > 0) {
    postNewCompany()
  }
}

// --------- VALIDAÇÃO FORMULÁRIO EMPRESA CADASTRADA

const msgs = {
  name: {
    valueMissing: "Name field cannot be empty.",
    patternMismatch: "Please fill in a valid name.",
    tooShort: "Please fill in a valid name."
  },
  email: {
    valueMissing: "The email field cannot be empty.",
    typeMismatch: "Please fill in a valid email.",
    tooShort: "Please fill in a valid email."
  },
  departament: {
    valueMissing: "You must choose a department before continuing",
  },
  calculation: {
    valueMissing: "You need to select a calculation type to continue.",
  },
  company: {
    valueMissing: "You must choose a company before continuing",
  },
  newCompany: {
    valueMissing: "The new company field cannot be empty.",
  },
  domain: {
    valueMissing: "The domain field cannot be empty.",
  },
  sector: {
    valueMissing: "You need to select a sector type to continue.",
  }
}

const typesOfErrors = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort'
];

function checkField(field) {
  let msg = "";
  field.setCustomValidity('');

  typesOfErrors.forEach(erro => {
    if (field.validity[erro]) {
      msg = msgs[field.name][erro];
    }
  })

  const textErro = field.parentNode.querySelector('.text-error')
  const validInput = field.checkValidity();
  if (!validInput) {
    textErro.textContent = msg;
    field.style.border = '2px solid red';
  } else {
    textErro.textContent = '';
    field.style.border = '1px solid black'
  }
}

inputsFormRequired.forEach((field) => {
  field.addEventListener("blur", () => checkField(field));
  field.addEventListener("invalid", event => event.preventDefault());
})

// --------- APARECER TOOLTIP DE AJUDA NO TYPE OF COMPANY

textTooltip.style.display = 'none';

icoTooltip.addEventListener('click', function () {
  if (textTooltip.style.display = 'none') {
    textTooltip.style.display = 'block';
  }
});


