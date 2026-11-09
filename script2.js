
document.getElementById("regForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (mobile.length != 10 || !/^[0-9]+$/.test(mobile)) {
        alert("Enter a valid 10 digit mobile number");
    }

    else if (password !== confirm) {
        alert("Passwords do not match");
    }

    else {
        document.getElementById("message").innerHTML =
        "Registration Successful! Welcome " + name;

        document.getElementById("regForm").reset();
    }

});
