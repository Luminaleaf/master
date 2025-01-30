document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.getElementById("submit");
    submitButton.style.color = "White"; // Changes button text color

    // Attach event listener to the form
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = new FormData(this);

        fetch("submit_form.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log("Form submitted successfully:", data);
            window.location.href = "after_submit.html"; // Redirect to success page
        })
        .catch(error => console.error("Error:", error));
    });
});