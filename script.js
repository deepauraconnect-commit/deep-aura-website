// ================= MENU TOGGLE =================
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

// Auto close menu on click (mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-links").classList.remove("show");
    });
});


// ================= SMOOTH SCROLL =================
function scrollContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// ================= FAQ TOGGLE =================
function toggleFAQ(el) {
    let p = el.nextElementSibling;
    p.style.display = (p.style.display === "block") ? "none" : "block";
}


// ================= EMAILJS =================
(function(){
    emailjs.init("YOUR_PUBLIC_KEY");  // अपना key डालना
})();

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
        alert("Message Sent Successfully!");
    }, function(error) {
        alert("Failed to send message.");
    });
});