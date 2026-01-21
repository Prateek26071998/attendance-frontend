function login() {
    const email = document.getElementById("email").value;

    if (email.includes("admin")) {
        window.location.href = "admin.html";
    } 
    else if (email.includes("hr")) {
        window.location.href = "hr.html";
    } 
    else {
        window.location.href = "employee.html";
    }
}
