document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
    console.log("Form Submitted Successfully!");
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert("❌ Invalid email format!");
        return;
    }

    alert("✅ Message Sent Successfully!");
});

// Email validation function
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Add fade-in animation to sections when scrolling
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");

    function reveal() {
        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (!darkModeToggle) {
        console.error("Dark mode button not found!");
        return;
    }

    // Check if dark mode was previously enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Light Mode";
    }

    // Add event listener to toggle dark mode
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Save preference in local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
