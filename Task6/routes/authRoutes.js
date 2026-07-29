const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Register
router.get("/register", authController.showRegister);
router.post("/register", authController.registerUser);

// Login
router.get("/login", authController.showLogin);
router.post("/login", authController.loginUser);

// Protected Dashboard
router.get("/dashboard", isAuthenticated, authController.dashboard);

// Logout
router.get("/logout", (req, res) => {

    req.session.destroy(() => {
        res.redirect("/login");
    });

});

module.exports = router;