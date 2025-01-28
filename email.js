(function() {
    emailjs.init("7DBduPWltULBtnd92"); // Replace with your EmailJS user ID
  })();

  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData.entries());

    emailjs.send("service_wi7qq88", "template_kxgk0ul", formObject) // Replace with your EmailJS service and template IDs
      .then(() => {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
        contactForm.reset();
      })
      .catch(() => {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
      });
  });
