// FEATURE 1: TYPEWRITER EFFECT (Animates the hero heading text letter by letter)
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

// FEATURE 2: PROJECT CARD TOGGLE (Expands/collapses detail section on each card)
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', function () {
        const detailsBox = this.nextElementSibling;
        detailsBox.classList.toggle('open');
        this.innerHTML = detailsBox.classList.contains('open')
            ? 'Hide details &uarr;'
            : 'Show details &darr;';
    });
});

// FEATURE 3: CONTACT MODAL + FORM VALIDATION (Opens/closes modal, validates all fields before submit)
const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const contactForm = document.getElementById('contactForm');

openBtn.addEventListener('click', () => modal.style.display = 'flex');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('nameInput').value;
    const nameError = document.getElementById('nameError');
    nameError.style.display = name.trim() === '' ? 'block' : 'none';
    if (name.trim() === '') isValid = false;

    const email = document.getElementById('emailInput').value;
    const emailError = document.getElementById('emailError');
    const emailInvalid = email.trim() === '' || !email.includes('@');
    emailError.style.display = emailInvalid ? 'block' : 'none';
    if (emailInvalid) isValid = false;

    const msg = document.getElementById('msgInput').value;
    const msgError = document.getElementById('msgError');
    msgError.style.display = msg.trim() === '' ? 'block' : 'none';
    if (msg.trim() === '') isValid = false;

    if (isValid) {
        alert(`Thank you, ${name}! Your message was successfully submitted.`);
        modal.style.display = 'none';
        contactForm.reset();
    }
});

// FEATURE 4: SCROLL REVEAL ANIMATION (Adds .active to .reveal elements as they enter viewport)
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

/* FEATURE 5: BACK TO TOP + ACTIVE NAV LINKS
   Shows top button after 300px scroll,
   highlights matching nav link per section */
const topButton = document.getElementById('topBtn');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = function () {
    // Show/hide back to top button
    topButton.style.display =
        (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
            ? 'block' : 'none';

    // Highlight active nav link based on current section
    let current = '';
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active-link');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active-link');
        }
    });
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}