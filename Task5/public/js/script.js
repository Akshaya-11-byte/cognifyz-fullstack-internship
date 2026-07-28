const form = document.getElementById("userForm");
const table = document.getElementById("userTable");

// Load all users when page opens
async function loadUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();

    table.innerHTML = "";

    if (users.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="4">No users added yet.</td>
            </tr>
        `;
        return;
    }

    users.forEach(user => {
        table.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
    <button class="edit-btn" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">
        Edit
    </button>

    <button class="delete-btn" onclick="deleteUser(${user.id})">
        Delete
    </button>
</td>
            </tr>
        `;
    });
}

// Add User
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    });

    form.reset();

    loadUsers();
});

// Delete User
async function deleteUser(id) {

    await fetch(`/api/users/${id}`, {
        method: "DELETE"
    });

    loadUsers();
}

// Load users initially
loadUsers();
async function editUser(id, oldName, oldEmail) {

    const name = prompt("Enter new name:", oldName);
    const email = prompt("Enter new email:", oldEmail);

    if (!name || !email) return;

    await fetch(`/api/users/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            email
        })

    });

    loadUsers();

}