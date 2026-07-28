const users = require("../models/userModel");

// Get all users
exports.getUsers = (req, res) => {
    res.json(users);
};

// Add a new user
exports.addUser = (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.json({
        message: "User added successfully!",
        user: newUser
    });
};

// Update user
exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.email = req.body.email;

    res.json({
        message: "User updated successfully!",
        user
    });
};

// Delete user
exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted successfully!"
    });
};