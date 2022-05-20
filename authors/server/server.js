const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB_NAME = "authors_db"
app.use(cors(), express.json(), express.urlencoded({ extended: true }));


require('./config/mongoose.config');


// This will fire our mongoose.connect statement to initialize our database connection
const exportedDbFunction = require("./config/mongoose.config");
exportedDbFunction(DB_NAME);



// This is where we import the users routes function from our user.routes.js file
const AllMyProductRoutes = require("./routes/author.routes");
AllMyProductRoutes(app);


app.listen( PORT, () => {
    console.log("You are now listening at port 8000")
})