 // Toggle Background Color
        let isLight = true;
        toggleColor.addEventListener("click", () => {
            document.body.style.backgroundColor = isLight ? "#333" : "#fff";
            document.body.style.color = isLight ? "#fff" : "#000";
        
           
            const main = document.querySelector("main");
            if (main) {
                main.style.backgroundColor = isLight ? "#333" : "#fff";
                main.style.color = isLight ? "#fff" : "#000";
            }
            toggleColor.textContent = isLight ? " Light Mode" : " Dark Mode";
    
            // Toggle the mode flag
         
            isLight = !isLight;
        });

        // Slider to Adjust Text Size
       
const textSlider = document.getElementById("textSlider");

textSlider.addEventListener("input", () => {
    document.documentElement.style.fontSize = textSlider.value + "px";
});

document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const modalOverlay = document.getElementById("modalOverlay");

    // Open modal function
    document.addEventListener("DOMContentLoaded", function () {
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
    });
});    
        // Form Validation
        const form = document.getElementById("myForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        form.addEventListener("submit", (e) => {
            let valid = true;

            if (nameInput.value.length < 3) {
                nameError.textContent = "Name must be at least 3 characters long.";
                valid = false;
            } else {
                nameError.textContent = "";
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = "Please enter a valid email address.";
                valid = false;
            } else {
                emailError.textContent = "";
            }

            const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordPattern.test(passwordInput.value)) {
                passwordError.textContent = "Password must be at least 8 characters long, with one uppercase letter and one number.";
                valid = false;
            } else {
                passwordError.textContent = "";
            }

            if (!valid) {
                e.preventDefault();
            }
        });

        // Dropdown Menu
        const dropdown = document.getElementById("dropdown");
        const dropdownMessage = document.getElementById("dropdownMessage");

        dropdown.addEventListener("change", () => {
            dropdownMessage.textContent = dropdown.value
                ? `You selected: ${dropdown.options[dropdown.selectedIndex].text}`
                : "";
        });
   
        document.addEventListener("DOMContentLoaded", function () {
            const loadingSpinner = document.getElementById("loadingSpinner");
        
            // Simulate a loading delay
            setTimeout(() => {
                loadingSpinner.style.display = "none"; 
            }, 2000); 
        });