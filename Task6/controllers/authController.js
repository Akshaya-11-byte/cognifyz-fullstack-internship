const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Show Register Page
exports.showRegister = (req, res) => {
    res.render("register");
};

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send("User already exists!");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.redirect("/login");

    } catch (err) {
        console.log(err);
        res.send("Registration Failed");
    }
};

// Show Login Page
exports.showLogin = (req, res) => {
    res.render("login");
};
// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.send("User not found!");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send("Invalid Password!");
        }

        // Save user session
        req.session.user = user;

        res.redirect("/dashboard");

    } catch (err) {
        console.log(err);
        res.send("Login Failed");
    }
};

// Dashboard
// Dashboard
exports.dashboard = (req, res) => {

    if (!req.session.user) {
        return res.redirect("/login");
    }

    const user = req.session.user;

    user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);

    res.render("dashboard", { user });
};