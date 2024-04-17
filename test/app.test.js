const supertest = require("supertest");
const app = require("../src/app");
const person = require("../src/data/cars");

test("GET all cars", async () => {
    const res = await supertest(app).get("/cars");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(4)
}) 

test("GET all cras by brand: Toyota", async () => {
    const res = await supertest(app).get("/cars/Toyota");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2)
}) 