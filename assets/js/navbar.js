const renderNavbar = () => {
  const currentUser =
    localStorage.getItem("currentUser") === "null"
      ? null
      : localStorage.getItem("currentUser");

  const authElement = document.getElementById("auth");

  authElement.innerHTML = currentUser
    ? `
    <a href="#">${currentUser}</a>
    <i class="fa-solid fa-right-from-bracket" id="logout"></i>
    `
    : `
    <a href="./login.html">Login</a>
    <a href="./signUp.html">Register</a>
    `;

  document.getElementById("logout").onclick = () => {
    localStorage.setItem("currentUser", null);
    alert("Đăng xuất thành công");
    renderNavbar();
  };
};

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
});
