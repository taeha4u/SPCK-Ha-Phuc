import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const EmailInput = document.getElementById("email");
const PasswordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit");
submitBtn.onclick = async (e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(
        auth,
        EmailInput.value,
        PasswordInput.value
        );
        // console.log(firebase.auth().currentUser);
        alert("Login successful")
        localStorage.setItem("currentUser", auth.currentUser.email)
        window.location.href="home.html"
    }catch(err){alert(err.message)}
}