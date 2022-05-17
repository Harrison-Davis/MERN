const express = require("express");
const app = express();
const PORT = 8000;
const DB_NAME = "jokes_db"

// This will fire our mongoose.connect statement to initialize our database connection

const exportedDbFunction = require("./server/config/mongoose.config");
exportedDbFunction(DB_NAME);

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
