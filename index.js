

    // Determine which form is active
    if (!document.getElementById("mpesa").classList.contains("hidden")) {
        phone = phoneInputs[0].value;
        amount = amountInputs[0].value;
    } else {
        phone = phoneInputs[1].value;
        amount = amountInputs[1].value;
    }

    if (phone === "" || amount === "") {
        alert("Please fill in all fields");
        return;
    }

    alert(`Processing ${method} payment of KES ${amount} for ${phone}`);
}
