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

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;

        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) item.classList.remove('active');
        });

        currentItem.classList.toggle('active');
    });
});