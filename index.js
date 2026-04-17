

//     // Determine which form is active
//     if (!document.getElementById("mpesa").classList.contains("hidden")) {
//         phone = phoneInputs[0].value;
//         amount = amountInputs[0].value;
//     } else {
//         phone = phoneInputs[1].value;
//         amount = amountInputs[1].value;
//     }

//     if (phone === "" || amount === "") {
//         alert("Please fill in all fields");
//         return;
//     }

//     alert(`Processing ${method} payment of KES ${amount} for ${phone}`);
// }
<script>
function handleSubmit(e) {
    e.preventDefault();

    // Get form elements
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // Simple validation
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate sending (you can later connect to backend)
    console.log("Form Data:", { name, email, message });

    // Show success message
    alert(`Thank you ${name}! Your message has been sent successfully.`);

    // Clear form
    form.reset();
}
</script>