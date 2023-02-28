const { nameValidation, emailValidation , numberValidation, genderValidation,hobbiesValidation} = require("../service/validation");

function handleFormSubmit(req,res){
    console.log(req.body);
 const  { name , email, number, gender, hobbies1, hobbies2, hobbies3} =  req.body;
 
 let hobbies = [hobbies1 , hobbies2 , hobbies3]
 console.log(hobbies);
 let errors = {};
 nameValidation(name  , errors);
 emailValidation(email, errors);
 numberValidation(number , errors);
 genderValidation(gender , errors);
 hobbiesValidation(hobbies , errors);
 console.log(errors);
 if (Object.keys(errors).length > 0) {
   res.render("form" , {errors : errors , name:name , email:email, number:number , gender:gender, hobbies1:hobbies1 , hobbies2:hobbies2, hobbies3:hobbies3})
  } else {
    res.render("success");
  }
}

module.exports = {handleFormSubmit}