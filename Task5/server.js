const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

// Home Page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});