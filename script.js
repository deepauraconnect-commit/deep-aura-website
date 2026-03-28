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
// ================= google form=================
function openContact(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScbl77jMf0BOQhcjck4LfJuTObH7WjC0JDgH8Ca_jXrG7nSbw/viewform", "_blank");
}

// ================= HERO BACKGROUND SLIDER =================
const images = [
    "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
];

let index = 0;

function changeBackground() {
    index++;
    if (index >= images.length) {
        index = 0;
    }

    document.querySelector(".hero").style.background =
        `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),
        url('${images[index]}') center/cover no-repeat`;
}

// change image every 4 seconds
setInterval(changeBackground, 4000);
