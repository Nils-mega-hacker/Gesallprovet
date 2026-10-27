//The form submit button sends an email to me via emailJS API
emailjs.init({ publicKey: "1da5VszGnCnikGmZg" });

//Vars
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const submitButton = form.querySelector('input[type="submit"]');

//Listener on submit- sends it forward to me
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Honeypot: only bots will fill out this field
    if (form.company.value !== "") {
        status.textContent = "Thanks! Your message has been sent.";
        return;
    }

    status.textContent = "Sending...";
    submitButton.disabled = true;

    emailjs.sendForm("service_qbl49jl", "template_6ptgbr8", form)
        .then(function () {
            status.textContent = "Thanks! Your message has been sent.";
            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS error:", error.status, error.text);
            status.textContent = "Something went wrong. Please try again or email me directly.";
        })
        .finally(function () {
            submitButton.disabled = false;
        });
});