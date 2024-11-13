// Function to validate donor signup form
function validateForm() {
    const name = document.getElementById("donor-name").value;
    const email = document.getElementById("donor-email").value;
    const password = document.getElementById("donor-password").value;
    
    // Simple validation rules
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password === "") {
        alert("Password must be filled out");
        return false;
    }

    // Allow form submission
    return true;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
