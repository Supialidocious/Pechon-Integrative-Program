# F1 Teams 2026 - Interactive Dashboard

An interactive web application showcasing Formula 1 teams competing in the 2026 season. Built with HTML, CSS, and JavaScript, featuring authentication pages, user profiles, and settings management.

## Features

### 1. **Homepage (index.html)**
- Hero section introducing F1 Teams 2026
- Team cards displaying constructor information
- Dynamic login/signup overlays
- Responsive navigation bar

### 2. **Authentication**
- **Login Page (Login.html)**: User authentication interface with form validation
- **Sign Up Page (Signup.html)**: New account creation with password confirmation

### 3. **Dashboard**
- **Profile Page (profile.html)**: User profile information and statistics
- **Settings Page (settings.html)**: User preferences and configuration options

### 4. **Styling**
- Custom CSS (style.css) for consistent design across all pages
- Responsive design supporting multiple screen sizes
- Team-themed color schemes for visual appeal

## Project Structure

```
PechonIPT/
├── index.html          # Main homepage with team listings
├── Login.html          # Login authentication page
├── Signup.html         # User registration page
├── profile.html        # User dashboard and profile
├── settings.html       # User settings and preferences
├── style.css           # Main stylesheet
├── simple-auth.css     # Authentication page styles (if separate)
├── auth-style.css      # Signup page styles (if separate)
├── script.js           # JavaScript validation and functionality
└── images/             # Directory containing F1 team logos and assets
    ├── Oracle Red Bull Racing.jpg
    ├── ferrari-logo.jpg
    └── [other team logos]
```

## Installation & Setup

1. **Clone the repository** (if using GitHub):
   ```bash
   git clone <repository-url>
   cd PechonIPT
   ```

2. **Local Development**:
   - Open `index.html` in your web browser
   - Or use a local server (e.g., Python): `python -m http.server 8000`

3. **GitHub Pages Deployment**:
   - Push the repository to GitHub
   - Enable GitHub Pages in repository settings
   - Site will be available at `https://<username>.github.io/<repo-name>/`

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling and responsive layout
- **JavaScript**: Client-side validation and interactivity
- **GitHub Pages**: Free hosting and deployment

---

## Add Validation Rule

### Overview
Implemented comprehensive client-side form validation using JavaScript to ensure data integrity and improve user experience across all authentication and interactive forms.

### Validation Features

#### 1. **Email Validation**
- Validates email format using regex pattern
- Ensures proper structure: `username@domain.extension`
- Prevents form submission with invalid emails

#### 2. **Password Validation**
- Minimum length requirement: 6 characters
- Prevents weak passwords
- Validates on both login and signup forms

#### 3. **Name Validation**
- Only accepts alphabetic characters and spaces
- Minimum length requirement: 2 characters
- Ensures proper name format on signup

#### 4. **Password Confirmation**
- Compares password and confirmation fields
- Ensures both values match before submission
- Clear error message if passwords don't match

### Implementation Details

**File: `script.js`**
- Centralized validation logic with reusable functions
- `ValidationRules` object contains core validation methods:
  - `isValidEmail()`: Email format validation
  - `isValidPassword()`: Password length validation
  - `isValidName()`: Name format validation
  - `passwordsMatch()`: Password confirmation matching

**Form Validation Functions:**
- `validateLoginForm()`: Validates login credentials
- `validateSignupForm()`: Validates signup information
- `showError()`: Displays formatted error messages
- `clearErrorMessages()`: Removes previous error states

**Error Display:**
- Dynamic error messages appear below invalid fields
- Red border highlighting on erroneous inputs
- Clear, user-friendly error descriptions
- Automatic clearing when form is revalidated

### Pages with Validation

1. **index.html** - Login and Signup overlays
2. **Login.html** - Standalone login form
3. **Signup.html** - Standalone registration form
4. **profile.html** - Maintains page stability
5. **settings.html** - No validation required (settings page)

### Usage Example

When a user attempts to submit a form without a valid email:
1. Form submission is prevented
2. Error message appears: "Please enter a valid email address"
3. Email input field is highlighted in red
4. User can correct the input and resubmit

### Testing Validation

**Test Login Form:**
- Valid: `user@example.com` + password (6+ chars) → Success
- Invalid email: `invalid.email` → Error message
- Short password: `123` → Error message

**Test Signup Form:**
- All fields required and validated
- Passwords must match (8 chars each)
- Name must contain only letters and spaces
- Clear feedback for each validation rule

### Browser Compatibility

Validation works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

### Future Enhancements

- Server-side validation integration
- Password strength meter
- Real-time validation feedback
- Custom validation rules per field
- Accessibility improvements for screen readers
