function formStart(){
    let nameValue = document.querySelector(".js-input-name").value;
    let companyValue = document.querySelector(".js-input-company").value;
    let workValue = document.querySelector(".js-input-work").value;
  
    let formPerson = {
        name: nameValue,
        company: companyValue,
        work: workValue
    };

    localStorage.getItem(formPerson);
    return true;
  }


//    const field = document.querySelector('input');



//   field.addEventListener('input', () => {
//     field.setCustomValidity('');
//     field.checkValidity();
//       console.log(field.checkValidity());
  
//   });
  
//   field.addEventListener('invalid', () => {
//     field.setCustomValidity('This Field Has Errors');
//   })


function nextPage(){
    window.location.href = "/quiz.html"
}



