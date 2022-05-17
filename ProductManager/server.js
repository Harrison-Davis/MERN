const express = require('express');
const cors = require('cors');
const app = express();
const DB_NAME = "products_db"
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


require('./server/config/mongoose.config');


// This will fire our mongoose.connect statement to initialize our database connection
const exportedDbFunction = require("./server/config/mongoose.config");
exportedDbFunction(DB_NAME);



// This is where we import the users routes function from our user.routes.js file
const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);


app.listen( 8000, () => {
    console.log("You are now listening at port 8000")
})









