const mongoose = require("mongoose");
const bookschema = new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    author :{
        type:String,
        required:false

    },

    category:{
        type:String,
        required:true,
        unique:false,

    }
   
    

})
const Issue = new mongoose.model("Issue" , bookSchema);
module.exports=Issue;const mongoose = require("mongoose");

// Define the book schema (corrected schema name and properties)
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Make the name field mandatory
  },
  author: {
    type: String,
    required: true, // Make the author field mandatory
  },
  category: {
    type: String,
    required: true, // Make the category field mandatory
    unique: false, // Allow duplicate categories for flexibility
  },
});

// Create the Mongoose model (corrected model name)
const Book = mongoose.model("Book", bookSchema); // Use "Book" for consistency

// Export the model
module.exports=Book;
