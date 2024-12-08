document.addEventListener("DOMContentLoaded", () => {
    const jwt = localStorage.getItem("jwt");

    // Si no existe el token, redirige al login
    if (!jwt) {
        window.location.href = "login.html";
    }
});

function logout(event) {
    localStorage.removeItem("jwt");
    window.location.href = "login.html";
}