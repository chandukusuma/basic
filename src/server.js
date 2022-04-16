const app = require("./index")

const connect = require("./config/db");

app.listen(6300, async function() {
    await connect();

    console.log("listening to the port 6300")
})
