document.addEventListener("DOMContentLoaded", function () {
    // Toggle Background Color
    let isLight = true;
    const toggleColor = document.getElementById("toggleColor");

    if (toggleColor) {
        toggleColor.addEventListener("click", () => {
            document.body.style.backgroundColor = isLight ? "#333" : "#fff";
            document.body.style.color = isLight ? "#fff" : "#000";

            const main = document.querySelector("main");
            if (main) {
                main.style.backgroundColor = isLight ? "#333" : "#fff";
                main.style.color = isLight ? "#fff" : "#000";
            }

            toggleColor.textContent = isLight ? "Light Mode" : "Dark Mode";
            isLight = !isLight; // Toggle the mode flag
        });
    }

    // Slider to Adjust Text Size
    const textSlider = document.getElementById("textSlider");

    if (textSlider) {
        textSlider.addEventListener("input", () => {
            document.documentElement.style.fontSize = textSlider.value + "px";
        });
    }

    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modalOverlay");

    if (openModalBtn && modal && modalOverlay) {
        // Open modal
        openModalBtn.addEventListener("click", function () {
            modal.classList.add("show");
            modalOverlay.classList.add("show");
        });

        // Close modal when clicking close button
        if (closeModalBtn) {
            closeModalBtn.addEventListener("click", function () {
                modal.classList.remove("show");
                modalOverlay.classList.remove("show");
            });
        }

        // Close modal when clicking outside (on overlay)
        modalOverlay.addEventListener("click", function () {
            modal.classList.remove("show");
            modalOverlay.classList.remove("show");
        });
    }

    
    // Form Validation
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    if (form) {
        form.addEventListener("submit", (e) => {
            let valid = true;

            // Name Validation
            if (nameInput.value.length < 3) {
                nameError.textContent = "Name must be at least 3 characters long.";
                valid = false;
            } else {
                nameError.textContent = "";
            }

            // Email Validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = "Please enter a valid email address.";
                valid = false;
            } else {
                emailError.textContent = "";
            }

            // Password Validation
            const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordPattern.test(passwordInput.value)) {
                passwordError.textContent =
                    "Password must be at least 8 characters long, with one uppercase letter and one number.";
                valid = false;
            } else {
                passwordError.textContent = "";
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }

    // Dropdown Menu
    const dropdown = document.getElementById("dropdown");
    const dropdownMessage = document.getElementById("dropdownMessage");

    if (dropdown) {
        dropdown.addEventListener("change", () => {
            dropdownMessage.textContent = dropdown.value
                ? `You selected: ${dropdown.options[dropdown.selectedIndex].text}`
                : "";
        });
    }

    // Loading Spinner Simulation
    const loadingSpinner = document.getElementById("loadingSpinner");

    if (loadingSpinner) {
        setTimeout(() => {
            loadingSpinner.style.display = "none";
        }, 2000);
    }
});
// Function with parameters and return values 
function calculateArea() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let modal = document.getElementById("modal");
    let areaResult = document.getElementById("areaResult");

    if (!isNaN(length) && !isNaN(width)) {
        let area = length * width;
        areaResult.innerText = `Robot Work Area: ${area} sq units`;
        modal.classList.remove("hidden");
    } else {
        areaResult.innerText = "Please enter valid numbers.";
        modal.classList.remove("hidden");
    }
}

document.getElementById("calculateBtn").addEventListener("click", calculateArea);
document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").classList.add("hidden");
});

// Function demonstrating scope 
let globalv= "Hello from Robot Me!";

document.getElementById("scopeBtn").addEventListener("click", function() {
    function showScopeExample() {
        let localMessage = "This is a local Robot function!";
        document.getElementById("scopeResult").innerText = `Global: ${globalv}\nLocal: ${localMessage}`;
    }
    showScopeExample();
});



