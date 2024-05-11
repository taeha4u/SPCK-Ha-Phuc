import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

var email = document.getElementById("email")
var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmPassword")

document.getElementById("submit").addEventListener("click", async function (e) {
    e.preventDefault()
    let chuThuong = /[a-z]/g
    let chuHoa = /[A-Z]/g
    let chuSo = /[0-9]/g
    let checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (
        email.value.trim().length == 0 ||
        password.value.trim().length == 0 ||
        confirmPassword.value.trim().length == 0
    ) {
        alert("Can not empty!")
    }
    else if (password.value.trim().length < 8) {
        alert("Password must have a minimum length of 8 characters.")
    }
    else if (!password.value.trim().match(chuThuong)) {
        alert("Password must have at least one lowercase character.")
    }
    else if (!password.value.trim().match(chuHoa)) {
        alert("Password must have at least one capital letter.")
    }
    else if (!password.value.trim().match(chuSo)) {
        alert("Password must have at least one number.")
    }
    else if (!email.value.trim().match(checkEmail)) {
        alert("Inappropriate email.")
    }
    else if (password.value.trim() != confirmPassword.value.trim()) {
        alert("password does not match")
    }
    // else if (!password.value.trim().match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
    //     alert("Inappropriate password.")
    // }
    else {
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value)
            // await firebase.auth().currentUser.sendEmailVerification();
            // alert("Verification Email sent")
            alert("registered successfully")
            window.location.href="./login.html"
            // Get currentUser info
        } catch (err) {
            alert(err.message);
        }

    }
})


