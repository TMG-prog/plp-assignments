
        // Toggle Background Color
        const toggleColorButton = document.getElementById("toggleColor");
        let isLight = true;

        toggleColorButton.addEventListener("click", () => {
            document.body.style.backgroundColor = isLight ? "#333" : "#fff";
            document.body.style.color = isLight ? "#fff" : "#000";
            isLight = !isLight;
        });

        // Slider to Adjust Text Size
        const textSlider = document.getElementById("textSlider");
        const dynamicText = document.getElementById("dynamicText");

        textSlider.addEventListener("input", () => {
            dynamicText.style.fontSize = textSlider.value + "px";
        });

        // Modal Functionality
        const openModalButton = document.getElementById("openModal");
        const closeModalButton = document.getElementById("closeModal");
        const modal = document.getElementById("modal");
        const modalOverlay = document.getElementById("modalOverlay");

        openModalButton.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalOverlay.classList.remove("hidden");
        });

        closeModalButton.addEventListener("click", () => {
            modal.classList.add("hidden");
            modalOverlay.classList.add("hidden");
        });

        modalOverlay.addEventListener("click", () => {
            modal.classList.add("hidden");
            modalOverlay.classList.add("hidden");
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
   