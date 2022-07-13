const express = require("express");
const app = express();
const port = 4000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
//const markersRoute = require("./routes/marker");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.mongo_url).then(console.log("connected to mongo")).catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
//app.use("/api/marker", markersRoute);

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });

app.listen(process.env.PORT || port, () => {
    console.log("backend is running");
})