const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://raldcruz2004:4mH6GiiaCE12OBQM@cluster0.6048vph.mongodb.net/",
{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(e);
})