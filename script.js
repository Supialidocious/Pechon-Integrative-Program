// Validation utility functions
const ValidationRules = {
    // Email validation
    isValidEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Password validation (minimum 6 characters)
    isValidPassword: function(password) {
        return password && password.length >= 6;
    },

    // Name validation (minimum 2 characters, only letters and spaces)
    isValidName: function(name) {
        const nameRegex = /^[a-zA-Z\s]{2,}$/;
        return nameRegex.test(name);
    },

    // Check if passwords match
    passwordsMatch: function(password1, password2) {
        return password1 && password2 && password1 === password2;
    }
};

// Form validation functions
function validateLoginForm() {
    const form = document.querySelector('form');
    if (!form) return true;

    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');

    if (!email || !password) return true;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Clear previous error messages
    clearErrorMessages();

    let isValid = true;

    // Validate email
    if (!emailValue) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!ValidationRules.isValidEmail(emailValue)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate password
    if (!passwordValue) {
        showError(password, 'Password is required');
        isValid = false;
    } else if (!ValidationRules.isValidPassword(passwordValue)) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    }

    return isValid;
}

function validateSignupForm() {
    const form = document.getElementById('signupForm') || document.querySelector('form');
    if (!form) return true;

    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const confirmInput = form.querySelectorAll('input[type="password"]')[1];

    // Clear previous error messages
    clearErrorMessages();

    let isValid = true;

    // Validate name
    if (nameInput) {
        const nameValue = nameInput.value.trim();
        if (!nameValue) {
            showError(nameInput, 'Full name is required');
            isValid = false;
        } else if (!ValidationRules.isValidName(nameValue)) {
            showError(nameInput, 'Full name must contain at least 2 characters and only letters');
            isValid = false;
        }
    }

    // Validate email
    if (emailInput) {
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!ValidationRules.isValidEmail(emailValue)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
    }

    // Validate password
    if (passwordInput) {
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (!ValidationRules.isValidPassword(passwordValue)) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        }
    }

    // Validate password confirmation
    if (confirmInput) {
        const confirmValue = confirmInput.value.trim();
        const passwordValue = passwordInput ? passwordInput.value.trim() : '';

        if (!confirmValue) {
            showError(confirmInput, 'Please confirm your password');
            isValid = false;
        } else if (!ValidationRules.passwordsMatch(passwordValue, confirmValue)) {
            showError(confirmInput, 'Passwords do not match');
            isValid = false;
        }
    }

    return isValid;
}

// Error display function
function showError(element, message) {
    // Remove any existing error message for this element
    const existingError = element.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Create and display error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#d9534f';
    errorDiv.style.fontSize = '12px';
    errorDiv.style.marginTop = '5px';
    errorDiv.style.marginBottom = '10px';

    element.parentElement.insertBefore(errorDiv, element.nextSibling);
    element.style.borderColor = '#d9534f';
    element.style.borderWidth = '2px';
}

// Clear all error messages
function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.borderColor = '';
        input.style.borderWidth = '';
    });
}

// Form submission handlers
function setupFormValidation() {
    // Handle login form submissions
    const loginOverlay = document.getElementById('loginOverlay');
    if (loginOverlay) {
        const loginForm = loginOverlay.querySelector('form');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (validateLoginForm()) {
                    alert('Login successful!');
                    hideLogin();
                }
            });
        }
    }

    // Handle signup form in overlay
    const signupOverlay = document.getElementById('signupOverlay');
    if (signupOverlay) {
        const signupForm = signupOverlay.querySelector('form');
        if (signupForm) {
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                if (validateSignupForm()) {
                    alert('Account created successfully!');
                    hideSignup();
                }
            });
        }
    }

    // Handle standalone signup form (Signup.html)
    const standaloneSignupForm = document.getElementById('signupForm');
    if (standaloneSignupForm) {
        standaloneSignupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateSignupForm()) {
                alert('Account created successfully!');
                // Redirect to login page after successful signup
                window.location.href = 'login.html';
            }
        });
    }

    // Handle standalone login form (Login.html)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // Check if it's a login form (has email and password)
        const hasEmail = form.querySelector('input[type="email"]');
        const hasPassword = form.querySelector('input[type="password"]');
        const hasName = form.querySelector('input[type="text"]');

        // If it's a login form (no name field, has email and password)
        if (hasEmail && hasPassword && !hasName && !form.id) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                if (validateLoginForm()) {
                    alert('Login successful!');
                    window.location.href = 'profile.html';
                }
            });
        }
    });
}

// UI Helper functions from original code
function hideLogin() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function hideSignup() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function switchToSignup() {
    document.getElementById('loginOverlay').style.display = 'none';
    document.getElementById('signupOverlay').style.display = 'flex';
}

function switchToLogin() {
    document.getElementById('signupOverlay').style.display = 'none';
    document.getElementById('loginOverlay').style.display = 'flex';
}

// Initialize form validation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setupFormValidation();

    // Close overlays on overlay click
    const loginOverlay = document.getElementById('loginOverlay');
    if (loginOverlay) {
        loginOverlay.addEventListener('click', function(e) {
            if (e.target === this) hideLogin();
        });
    }

    const signupOverlay = document.getElementById('signupOverlay');
    if (signupOverlay) {
        signupOverlay.addEventListener('click', function(e) {
            if (e.target === this) hideSignup();
        });
    }
});


