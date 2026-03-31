// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Scroll to Top Button Logic
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation Logic
function validateForm(event) {
    event.preventDefault(); // Prevent actual form submission for demo
    
    let isValid = true;
    
    // Get values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;

    // Get error elements
    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const serviceError = document.getElementById('serviceError');

    // Reset errors
    nameError.style.display = 'none';
    phoneError.style.display = 'none';
    serviceError.style.display = 'none';

    // Validate Name
    if (name === '') {
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validate Phone (simple Indian format check - 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.style.display = 'block';
        isValid = false;
    }

    // Validate Service Selection
    if (service === '') {
        serviceError.style.display = 'block';
        isValid = false;
    }

    // If valid, show success message and clear form (Simulated submission)
    if (isValid) {
        alert('Thank you, ' + name + '! Your request has been submitted successfully. We will call you at ' + phone + ' soon.');
        document.getElementById('enquiryForm').reset();
    }

    return false;
}
