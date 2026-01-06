// Preloader Control
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');

    // Minimum display time for smooth experience (1.5 seconds)
    setTimeout(() => {
        preloader.classList.add('fade-out');

        // Remove from DOM after fade animation completes
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Loan Amount Slider Update
function updateLoanAmount(value) {
    const formattedValue = formatCurrency(value);
    document.getElementById('loanAmountValue').textContent = formattedValue;
}

// Format Currency
function formatCurrency(value) {
    const num = parseInt(value);
    if (num >= 100000) {
        return '₹' + (num / 100000).toFixed(2) + 'L';
    } else if (num >= 1000) {
        return '₹' + (num / 1000).toFixed(0) + 'K';
    }
    return '₹' + num.toLocaleString('en-IN');
}

// Scroll to Form
function scrollToForm() {
    const form = document.getElementById('loanForm');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Add focus animation
    form.style.animation = 'none';
    setTimeout(() => {
        form.style.animation = 'pulse 0.5s ease';
    }, 10);
}

// Handle Form Submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = {
        fullName: formData.get('fullName'),
        mobile: formData.get('mobile'),
        city: formData.get('city'),
        loanAmount: formData.get('loanAmount'),
        monthlyIncome: formData.get('monthlyIncome'),
        employmentType: formData.get('employmentType'),
        timestamp: new Date().toISOString()
    };

    // Log to console (in production, send to backend/Google Sheets/Email)
    console.log('Form Submission:', data);

    // Simulate API call
    setTimeout(() => {
        // Show success modal
        showModal();

        // Reset form
        event.target.reset();
        updateLoanAmount(200000);

        // Send data to backend (example)
        // sendToBackend(data);
        // OR send to Google Sheets
        // sendToGoogleSheets(data);
        // OR send email
        // sendEmail(data);
    }, 500);
}

// Show Success Modal
function showModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('successModal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Sticky Apply Button Visibility
let lastScrollTop = 0;
const stickyApply = document.getElementById('stickyApply');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroSection = document.getElementById('hero');
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    // Show sticky button when scrolled past hero section
    if (scrollTop > heroBottom) {
        stickyApply.classList.add('visible');
    } else {
        stickyApply.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
});

// Auto-focus on first input when form is in view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const formObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const firstInput = entry.target.querySelector('input[type="text"]');
            if (firstInput && window.innerWidth > 768) {
                setTimeout(() => {
                    firstInput.focus();
                }, 300);
            }
        }
    });
}, observerOptions);

const loanForm = document.getElementById('loanForm');
if (loanForm) {
    formObserver.observe(loanForm);
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll for feature cards
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .provider-card, .step-card, .contact-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();

    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.animation = 'none';
            setTimeout(() => {
                ctaButton.style.animation = 'pulse 0.5s ease';
            }, 10);
        }, 3000);
    }
});

// Phone number validation
const mobileInput = document.getElementById('mobile');
if (mobileInput) {
    mobileInput.addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
    });
}

// Form field animations
const formInputs = document.querySelectorAll('.form-group input, .form-group select');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });

    input.addEventListener('blur', function () {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Add loading state to submit button
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', function (e) {
        const submitBtn = this.querySelector('.cta-button');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = '⏳ Processing...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }, 1000);
    });
}

// Example: Send to Google Sheets (requires Google Apps Script)
function sendToGoogleSheets(data) {
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Example: Send to Backend API
function sendToBackend(data) {
    const apiURL = 'YOUR_BACKEND_API_URL';

    fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Example: Send Email (requires backend email service)
function sendEmail(data) {
    const emailURL = 'YOUR_EMAIL_SERVICE_URL';

    const emailData = {
        to: 'support@krishanaloan.com',
        subject: `New Loan Application - ${data.fullName}`,
        body: `
            New Loan Application Received:
            
            Name: ${data.fullName}
            Mobile: ${data.mobile}
            City: ${data.city}
            Loan Amount: ₹${parseInt(data.loanAmount).toLocaleString('en-IN')}
            Monthly Income: ${data.monthlyIncome}
            Employment Type: ${data.employmentType}
            Timestamp: ${data.timestamp}
        `
    };

    fetch(emailURL, {
        method: 'POST',
        body: JSON.stringify(emailData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log('Email sent:', result);
        })
        .catch(error => {
            console.error('Email error:', error);
        });
}

// Track form interactions (for analytics)
function trackFormInteraction(field, value) {
    // Example: Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_interaction', {
            'event_category': 'Loan Application',
            'event_label': field,
            'value': value
        });
    }

    // Example: Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: field
        });
    }
}

// Add tracking to form fields
formInputs.forEach(input => {
    input.addEventListener('change', function () {
        trackFormInteraction(this.name, this.value);
    });
});

// Performance optimization: Lazy load images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('🚀 Krish Consultency - Landing Page Loaded Successfully!');

// Expose functions to global scope for inline event handlers
window.updateLoanAmount = updateLoanAmount;
window.scrollToForm = scrollToForm;
window.handleSubmit = handleSubmit;
window.showModal = showModal;
window.closeModal = closeModal;
