const express = require("express")
const { get } = require("http")
const { faker } = require('@faker-js/faker');
const { Router } = require("express");
const app = express()
const PORT = 8000;


// -------Classes-----------

const newUser = () => {
    const User = {
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            phoneNumber : faker.phone.phoneNumber(),
            email : faker.internet.email(),
            password : faker.internet.password(),
            _id : faker.datatype.uuid(),
        
    }
    return User;
};

const newCompany = () => {
    const Company = {
        _id : faker.datatype.uuid(),
        companyName : faker.company.companyName(),
        streetAddress : faker.address.streetAddress(),
        city : faker.address.city(),
        state : faker.address.state(),
        zipCode : faker.address.zipCode(),
        country : faker.address.country(),
    } 
    return Company
}


// const Users = [];




// -------Routes------

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
    res.json(newUser());
    // console.log(newUser());
    // push to Users array
    // Users.push(res.body)
});
app.get("/api/companies/new", (req, res) => {
    res.json(newCompany());
});
app.get("/api/user/company", (req, res) => {
    res.json({user: newUser(),
            company: newCompany()
    });
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


//we can create a function to return a random / fake "Product"

    
//const newUser1 = createUser();
//console.log(newUser1);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

