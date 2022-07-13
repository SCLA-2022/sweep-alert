const express = require("express");
const app = express();
const port = 4000;

app.listen(process.env.PORT || port, () => {
    console.log("backend is running");
})