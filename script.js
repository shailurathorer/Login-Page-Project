function showpopup(){
    document.getElementById("popup").style.display="flex";
}

function closepopup(){
    document.getElementById("popup").style.display="none";
}

function showPopup() {
    document.getElementById("signupPopup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("signupPopup").style.display = "none";
}

const toggle = document.getElementById("togglePassword");
const pass = document.getElementById("password");

toggle.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
        toggle.textContent = "🙈";  
    } else {
        pass.type = "password";
        toggle.textContent = "👁";
    }
});

document.getElementById("loginBtn").addEventListener("click", function() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("error-msg");

    if (user === "" || pass === "") {
        msg.textContent = "Please fill all fields!";
        return;
    }

    if (user !== "admin" || pass !== "1234") {
        msg.textContent = "Incorrect username or password!";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Login successful!";
});