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

app.get("/issue",(req,res)=>{
   
  res.render("issue");
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

    

app.post("/issue", async (req, res) => {
  console.log(req.body); // Log the request body for debugging

  try {
    // Create a new Book instance with data from the request body
    const newBook = new Book({
      name: req.body.name,
      author: req.body.author,
      category: req.body.category,
    });

    // Validate and save the Book instance (assuming validation is implemented)
    const savedBook = await newBook.save();

    // Respond with a success message and potentially the saved book data
    res.status(201).json({ message: "Book issued successfully!", book: savedBook }); // Use JSON for API responses

  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ message: "Error issuing book", error: error.message }); // Send a more informative error response
  }
});
app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});

