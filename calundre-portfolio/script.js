// JS Feature 1: Typing Effect in Home Section
const textToType = "Next Click.";
const typeWriterElement = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 150); 
    }
}
setTimeout(typeWriter, 500);

// JS Feature 2: Toggle Details on Project Cards with Animation
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', function() {
        const detailsBox = this.nextElementSibling;
        detailsBox.classList.toggle('open');
        
        if (detailsBox.classList.contains('open')) {
            this.innerHTML = 'Hide details &uarr;';
        } else {
            this.innerHTML = 'Show details &darr;';
        }
    });
});

// JS Feature 3: Form Validation & Modal toggle
const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const contactForm = document.getElementById('contactForm');

openBtn.addEventListener('click', () => modal.style.display = 'flex');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    let isValid = true;
    
    const name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    } else { document.getElementById('nameError').style.display = 'none'; }

    const email = document.getElementById('emailInput').value;
    if (email.trim() === '' || !email.includes('@')) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else { document.getElementById('emailError').style.display = 'none'; }

    const msg = document.getElementById('msgInput').value;
    if (msg.trim() === '') {
        document.getElementById('msgError').style.display = 'block';
        isValid = false;
    } else { document.getElementById('msgError').style.display = 'none'; }

    if (isValid) {
        alert(`Thank you, ${name}! Your message was successfully submitted.`);
        modal.style.display = 'none';
        contactForm.reset();
    }
});

// JS Feature 4: Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); 

// JS Feature 5: Back to Top Button & Active Nav Links
let topButton = document.getElementById("topBtn");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active-link");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active-link");
        }
    });
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}