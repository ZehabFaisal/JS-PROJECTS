function checkStrength() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("strengthMessage");

    if (password.length === 0) {
        alert("Error! Please enter a password...");
        return;
    } 
    else if (password.length < 5) {
        message.innerHTML = "It is a Weak Password, try again";
        message.style.color = "red";
    } 
    else if (password.length < 8) {
        message.innerHTML = "It is a Moderate Password";
        message.style.color = "orange";
    }
    else {
        message.innerHTML = "It is a Strong Password, good try";
        message.style.color = "green";
    }
}