// import mongoose here
const mongoose = require('mongoose');

module.exports = (DB_Name) => {

    mongoose.connect('mongodb://localhost/' + DB_Name, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Established a connection to the database'))
        .catch(err => console.log('Something went wrong when connecting to the database ', err));
}
