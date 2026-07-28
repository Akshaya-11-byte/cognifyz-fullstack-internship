const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// GET - Fetch all users
router.get("/users", userController.getUsers);

// POST - Add a new user
router.post("/users", userController.addUser);

// PUT - Update a user
router.put("/users/:id", userController.updateUser);

// DELETE - Delete a user
router.delete("/users/:id", userController.deleteUser);

module.exports = router;