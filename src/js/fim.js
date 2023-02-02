// ----------------

function enviar(){
  var nameValue = document.querySelector(".js-input-name").value;
  var companyValue = document.querySelector(".js-input-company").value;
  var workValue = document.querySelector(".js-input-work").value;

  var formPerson = {
      name: nameValue,
      company: companyValue,
      work: workValue
  };
  console.log(formPerson);
  console.log(JSON.stringify(formPerson));
}




