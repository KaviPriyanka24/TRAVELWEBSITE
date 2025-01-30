document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const bookNowBtn = document.getElementById("bookNowBtn");

    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    const bookNowModal = document.getElementById("bookNowModal");

    const closeButtons = document.querySelectorAll(".close");

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    signupBtn.addEventListener("click", () => {
        signupModal.style.display = "block";
    });

    bookNowBtn.addEventListener("click", () => {
        bookNowModal.style.display = "block";
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const modalId = event.target.getAttribute("data-close");
            document.getElementById(modalId).style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});
