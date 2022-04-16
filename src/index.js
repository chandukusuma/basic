const express  = require("express");

const {register, login, changePassword} = require("./controller/auth.controller");
const Auth = require("./middleware/Auth")

const app = express();

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.post("/changepassword", changePassword)


module.exports = app;