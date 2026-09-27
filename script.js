// confirm logout
const logout = document.getElementById("logout-button");
logout.onclick = () => {
   return confirm("Are you sure you want to log out?");
};

const alert_example = document.getElementById("alert-example");
const navbar = document.getElementById("main-navbar");
const table = document.getElementById("tabel");
const body = document.body;
let theme = "light";
alert_example.addEventListener('click', () => {
    if(theme === "light"){
        // ganti theme navbar
        navbar.classList.remove("bg-body-tertiary");
        navbar.classList.add("navbar-dark","bg-dark");
        // ganti theme body
        body.style.backgroundColor = "black";
        body.style.color = "white";
        theme = "dark";
        alert_example.textContent = "Dark Mode";
        tabel.classList.remove("table-light");
        tabel.classList.add("table-dark");
        logout.classList.remove("btn-dark");
        logout.classList.add("btn-light");
    }
    else if(theme === "dark"){
        // ganti theme navbar
        navbar.classList.remove("navbar-dark","bg-dark");
        navbar.classList.add("bg-body-tertiary");
        // ganti theme body
        body.style.backgroundColor = "white";
        body.style.color = "black";
        theme = "light";
        alert_example.textContent = "Light Mode";
        tabel.classList.remove("table-dark");
        tabel.classList.add("table-light");
        logout.classList.remove("btn-light");
        logout.classList.add("btn-dark");
    }
});
