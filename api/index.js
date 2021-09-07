const express = require("express");
const server = express();

server.get("/teste", () => {
    console.log("teste");
});
server.get("/geeks", (req, res) => {
    return res.json({
        message: "Hello World",
    });
});
server.listen(3000);
