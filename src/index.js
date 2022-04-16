const express  = require("express");

const {register, login, list, updateuser} = require("./controller/auth.controller");
const Auth = require("./middleware/Auth")

const app = express();

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.get("/getuserlist", list);

app.patch("/user/:id", updateuser)


module.exports = app;