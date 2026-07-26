const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});
app.post("/register", (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.send("Passwords do not match!");
    }

    res.render("dashboard", { name });
});

app.get("/login", (req, res) => {
    res.render("login");
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "123456") {
        return res.render("dashboard", { name: "Admin" });
    }

    res.render("error");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});