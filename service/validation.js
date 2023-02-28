
 function nameValidation(name , errors){
    if(!name){
     return errors.name = "Name is required.";
    }else if(name.length < 5){
      errors.name = "Name must be at least 5 character.";
    } 
   return 
}
 function emailValidation(email , errors){
    if(!email){
      return errors.email = "Email is Required";
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   if(!regex.test(email)){
     errors.email = "Invalid Email format.";
   }
   return
}
function numberValidation(number , errors){
  if (!number || isNaN(number)) {
   return errors.number = 'Phone number must be numeric.';
  }
  if(number.length <10 || number.length>10 ){
    errors.number = "Phone number should be ten digits.";
  }
  
 
  return
}
function genderValidation(gender ,  errors){
  if(!gender){
    errors.gender = "Gender is required.";
  }
  return

}

function hobbiesValidation(hobbies ,errors){
  let i=0;
  console.log("service" , hobbies.length);
  hobbies.forEach((hobby) => {
    if ( hobby != undefined ) {  
      i++;
}  
});
if(i == 0){
   errors.hobbie = "Select at least one Hobby.";
}
 
return
}

module.exports = {  nameValidation , emailValidation, numberValidation , genderValidation , hobbiesValidation}