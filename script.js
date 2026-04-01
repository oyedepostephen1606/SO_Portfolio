// 1. Remove Loader on Load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 1500); // 1.5s delay for premium feel
});

// 2. Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// 3. Typing Animation (Typed.js)
new Typed('.typing', {
    strings: ['Graphics Designer', 'Student Nurse', 'Brand Strategist'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// 4. Initialize Particles.js (Animated Background)
particlesJS("particles-js", {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ff0303" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#611313", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// 5. Initialize Swiper (Review Carousel)
new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// 6. Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
                setTimeout(() => project.style.opacity = '1', 10);
            } else {
                project.style.opacity = '0';
                setTimeout(() => project.style.display = 'none', 300);
            }
        });
    });
});

// 7. Fullscreen Lightbox Gallery
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// 8. Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (htmlEl.getAttribute('data-theme') === 'dark') {
        htmlEl.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        htmlEl.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// 9. Contact Form -> WhatsApp Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format message for WhatsApp
    const waText = `Hello Stephen!%0A%0AMy name is ${name}.%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    const waLink = `https://wa.me/2348165978321?text=${waText}`;
    
    // Open in new tab
    window.open(waLink, '_blank');
});