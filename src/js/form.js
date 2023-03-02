function formStart() {
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

let formCompany = document.getElementById("form-company");
let formPerson = document.getElementById("form-person");
let select = document.getElementById("company");
formCompany.style.display = "none";
formPerson.style.display = "block";

select.addEventListener("change", function () {
  if (select.value === "Other") {
    formCompany.style.display = "block";
    formPerson.style.display = "none";
  } else {
    formCompany.style.display = "none";
    formPerson.style.display = "block";
  }
});

// --------- FORM COMPANY BTN CANCEL

let btnCancel = document.getElementById("btnCancel");

btnCancel.addEventListener("click", function () {
  if (formCompany.style.display === "block") {
    formPerson.style.display = "block";
    formCompany.style.display = "none";

    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});

// --------- IR PARA PRÓX PÁGINA

function nextPage() {
  window.location.href = "/quiz.html";
  localStorage.getItem(formStart);
}

// --------- API PUXAR AS COMPANYS CADASTRADAS

const url =
  "https://03uctuell0.execute-api.us-east-1.amazonaws.com/dev/companies";

// let apiCompanyNameValue = document.querySelector(".js-input-companyname").value;
// let apiDomainValue = document.querySelector(".js-input-domain").value;
// let apiSectorValue = document.querySelector(".js-input-sector").value;

async function getAllPosts() {
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

getAllPosts();

// --------- API CADASTRAR COMPANY NA API

let apiFormCompany = document.querySelector("#form-company");

apiFormCompany.addEventListener("submit", (e) => {
  e.preventDefault();

  let apiCompanyNameValue = document.querySelector(".js-input-companyname");
  let apiDomainValue = document.querySelector(".js-input-domain");
  let apiSectorValue = document.querySelector(".js-input-sector");

  let newCompany = {
    company_name: apiCompanyNameValue.value,
    domain: apiDomainValue.value,
    sector: apiSectorValue.value,
  };

  console.log(newCompany);

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
      "x-amz-apigw-id": "Azc6jHfgIAMFlMA=",
      "X-Amzn-Trace-Id": "Root=1-63f7a843-26fa33d11deb0e5066ae33bf;Sampled=0",
    },
    body: JSON.stringify(newCompany),
  })
    .then(function(response){
      console.log(response);})
    .then((json) => console.log(json))
    .catch(error => console.error('Error:', error)); 

    if (formCompany.style.display = "block") {
      formCompany.style.display = "none";
      formPerson.style.display = "block";
      document.location.reload();
    } else {
      formCompany.style.display = "block";
      formPerson.style.display = "none";
    }


  // --------------


});

//   async function getPost() {
    
//   fetch(url, {
//     method: "POST",
//     mode:"no-cors",

//     headers: {
//         "Access-Control-Request-Method": "POST",
//       "Content-Type": "application/json",
//       "Content-Length": "189",
//       "Connection": "keep-alive",
//       "x-amzn-RequestId": "6c5844fc-ec35-44c1-92c6-148b6d5c599b",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Origin": "https://127.0.0.1:5500",
//       "x-amz-apigw-id": "Azc6jHfgIAMFlMA=",
//       "X-Amzn-Trace-Id": "Root=1-63f7a843-26fa33d11deb0e5066ae33bf;Sampled=0",
//     },
//     body: JSON.stringify(newCompany),
//   })
//     .then(function(response){
//       console.log(response);})

//     .then((json) => console.log(json))

//     .catch(error => console.error('Error:', error)); 
//     } //END GETPOST

// getPost();

// async function getPost() {

// let apiFormCompany = document.querySelector("#form-company");

// //RETIRANDO ENVIO DO FORM
// apiFormCompany.addEventListener("submit", (e) => {
//     e.preventDefault();

//     newCompany = JSON.stringify(newCompany);

//     function success() {
//         var data = JSON.parse(this.responseText); //fazer o parsing da string para JSON
//         console.log(data);
//     }

//     // // função para tratar o erro
//     // function error(err) {
//     //     console.log('Erro de solicitação', err); //os detalhes do erro estarão no objeto "err"
//     // }

//     fetch('http://localhost:5500/start.html?'+url, {
//         method: "POST",
//         body: newCompany,
//         headers: { "Content-type": "application/json;" , "Access-Control-Allow-Origin" : '*' }
//     })
//         // .then(response => response.json())
//         // .then(json => console.log(json));

// }) //END APIFORMCOMPANY

//} //END GETPOST

// getPost();

// --------- CÓDIGO PARA USAR DEPOIS

// const urlSearchParams = new URLSearchParams(window.location.search);
