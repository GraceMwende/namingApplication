// function getDate(){
//   var date = document.querySelector('#date').value;
//   return date;
// }
// alert(getDate(date));

// const wrapper = document.querySelector('.form'),
//       form =document.querySelectorAll('form'),
//       submitInput = form[0].querySelector('input[type = "submit"]');


// function getdataForm(e){
//   e.preventDefault();

//   var formData = new FormData(form[0]);
//   alert(formData.get('gender') + ' - ' + FormData.get('date'));
// }

// document.addEventListener('DOMContentLoaded', function(){
//   submitInput.addEventListener('click', getdataForm, false)
// }, false);  

 function takevalue(){
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    document.write("Your gender is:" + gender);
    document.write("Your birthday date is:" +date);
    console.log(gender);
    console.log(date);
 }