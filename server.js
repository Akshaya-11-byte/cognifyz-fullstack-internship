const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index");
});
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phonenumber=req.body.phonenumber;
    const age=req.body.age

    res.render("result", {
        name: name,
        email: email,
        phonenumber:phonenumber,
        age:age
    });

});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});