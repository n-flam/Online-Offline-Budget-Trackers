let mongoose = require("mongoose");
let db = require("../models");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_DSN, {
    useNewUrlParser: true,
    useFindAndModify: false
});


let budgetSeed = [
    {
        name: "Salary",
        value: 1500,
        date: new Date,
    }
]

db.Budget.deleteMany({})
    .then(() => db.Budget.collection.insertMany(budgetSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });