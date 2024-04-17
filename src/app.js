const express = require("express");
const app = express();
const cars = require("./data/cars");

app.use(express.json())

app.get("/cars", (req, res) => {
    res.status(200).send(cars)
})
app.get("/cars/:brand", (req, res) => {
    res.status(200).send(cars.
        filter(
            car => car.brand.toUpperCase() == req.params.brand.toUpperCase() 
        )
    )
})

module.exports = app