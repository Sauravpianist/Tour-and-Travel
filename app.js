const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.static("Backend"));

app.use(express.static("/public/tour website"));
// // Bodyparser Middleware
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/", (req, res) =>{
//     res.sendFile(__dirname + "/signup.html");
// });

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/signup", (req, res) =>{
    res.sendFile(__dirname + "/signup.html");
});

app.post("/success", (req, res) =>{
    // res.sendFile(__dirname + "/index.html");
    res.redirect("/");
  });

app.listen(3000, () => {
    console.log("server is running at port 3000");
})  