const connectToMongo = require ('./db');
const express = require('express');
const { urlencoded } = require('express');


connectToMongo();  
const app = express();
app.use(express.static("public"));
app.use(express.static("/public/tour website"));
const port = 5000

// Middle-Ware for undefined
app.use(express.json())
app.use(urlencoded({extended: true}));
// Available Routes 
app.use('/app/auth', require('./routes/auth'));
app.use('/app/notes', require('./routes/notes'));
// app.use('/app/detail', require('./routes/detail'));
app.use('/app/detail', require('./routes/detail'));
// app.use('/app/notes', require('')) 

app.post("/success", (req, res) =>{
  // res.sendFile(__dirname + "/index.html");
  res.redirect("http://localhost:3000/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
