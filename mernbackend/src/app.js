const express = require("express");
const path = require("path"); // Add this line to import the path module
const app = express();
const hbs =require("hbs");
require("./db/conn");
const Register= require("./models/registers")

const port = 3000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials")
app.use(express.static(static_path));
app.set("view engine" ,"hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.use(express.urlencoded({ extended: true })); 


app.get("/", (req, res) => {
  res.render("index")
});

app.get("/register",(req,res)=>{
   
    res.render("register");
})

app.post("/register",async (req,res)=>{
    console.log(req.body);
    try {
        const password = req.body.password.trim();
        const cpassword = req.body.confirmpassword.trim();
        if (password == cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                age:req.body.age,
                phonenumber:req.body.phonenumber,
                gender:req.body.gender,
                password:password,
                confirmpassword:cpassword
            })
           const registered= await registerEmployee.save();
           res.status(201).render("index");
          
        } else {
          res.send("Passwords do not match");
        }
      } catch (error) {
        res.status(400).send(error);
      }
    });
app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});
