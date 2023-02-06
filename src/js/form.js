function formStart(){
    let nameValue = document.querySelector(".js-input-name").value;
    let companyValue = document.querySelector(".js-input-company").value;
    let typeCompanyValue = document.querySelector(".js-input-typecompany").value;
    let companyNameValue = document.querySelector(".js-input-companyname").value;
    let departamentValue = document.querySelector(".js-input-departament").value;
  
    let formPerson = {
        name: nameValue,
        company: companyValue,
        newCompany: typeCompanyValue,
        companyName: companyNameValue,
        departament: departamentValue
    };

    localStorage.getItem(formPerson);
    return true;
  }

function nextPage(){
    window.location.href = "/quiz.html"
}



