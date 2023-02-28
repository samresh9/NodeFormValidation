const express = require('express');
const{handleFormSubmit} = require("./controllers/formValidateController");
const ejs = require("ejs");
const app = express();
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//

const port=3000;
app.get("/" , (req,res)=>{
    res.render("form" , {errors : null});
})
app.post("/submit", handleFormSubmit);
app.listen(port , (req,res)=>{
    console.log(`Server running on port ${port}` );
})