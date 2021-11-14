 const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
 const maleNames = ["kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "kwame"];
 const femaleNames = ["Akosua", "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 document.getElementById("formValues").addEventListener("submit", function(e){
   e.preventDefault();
   takevalue();
 })
 function takevalue(){
    var gender = document.getElementById("gender").value;
    var dateValue = document.getElementById("date").value;
    // document.write("Your gender is:" + gender);
    // document.write("Your birthday date is:" +dateValue);

    let dayIndex = getDayIndex(dateValue);
    
    // getAkpanName(dayIndex, gender);

    //  append Akan Names
    let akanNames = document.getElementById("akanName");
    let akanNameFunction = getAkpanName(dayIndex, gender);
    akanNames.append(akanNameFunction);
 }

 function getDayIndex(dateValue){
  var dateValueConverted = new Date (dateValue);
  let day = dateValueConverted.getDay();
  return day;
 }


 function getAkpanName(dayIndex, gender){
  if (gender == "male"){
       return `You were born on ${days[dayIndex]} Your Akpan Name is ${maleNames[dayIndex]}`;
  }
  else if (gender == "female"){
     return `You were born on ${days[dayIndex]}Akpan Name is ${femaleNames[dayIndex]}`;
  }
 }





