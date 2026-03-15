const toggleBtn = document.querySelector(".toggle");
const navActions = document.querySelector(".nav-actions");

const burgerIcon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    navActions.classList.toggle("active")

    if (navActions.classList.contains("active")) {
        burgerIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        burgerIcon.classList.replace("fa-xmark", "fa-bars")
    }
})
