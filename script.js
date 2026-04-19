// MOBILE MENU
function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
}

// FORM SUBMIT contact
function handleSubmit(event) {
    event.preventDefault();
    alert("Message sent successfully!");
    event.target.reset();
}

// AUTO RESPONSIVE BEHAVIOR (optional)
window.addEventListener("resize", function () {
    const menu = document.querySelector("nav ul");
    if (window.innerWidth > 768) {
        menu.classList.remove("show");
    }
    
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});
