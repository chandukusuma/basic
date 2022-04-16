const express  = require("express");

const {register, login, userDetails} = require("./controller/auth.controller");

const app = express();

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.get("/userDetails", userDetails);

module.exports = app;