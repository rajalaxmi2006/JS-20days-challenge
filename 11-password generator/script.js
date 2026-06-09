// DOM Elements
const passwordDisplay = document.getElementById('password-display');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

// Character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';

// Generate function
function generatePassword() {
    let length = parseInt(lengthEl.value);    
    // Validation/Enforcement of limits
    if (isNaN(length) || length < 4) length = 4;
    if (length > 32) length = 32;
    lengthEl.value = length;
    let allowedChars = '';
    let password = '';

    if (uppercaseEl.checked) allowedChars += uppercaseChars;
    if (lowercaseEl.checked) allowedChars += lowercaseChars;
    if (numbersEl.checked) allowedChars += numberChars;
    if (symbolsEl.checked) allowedChars += symbolChars;

    // If no options are selected
    if (allowedChars === '') {
        passwordDisplay.innerText = 'Select at least 1 option';
        return;
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    passwordDisplay.innerText = password;
}

// Copy to clipboard function
async function copyToClipboard() {
    const password = passwordDisplay.innerText;
    if (password === 'Click Generate' || password === 'Select at least 1 option') {
        return;
    }
    try {
        await navigator.clipboard.writeText(password);
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied!';
        copyBtn.style.background = '#22c55e'; // turn green   
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.background = ''; // reset color via CSS
        }, 2000);
    } catch (err) {
        alert('Failed to copy password.');
    }
}
// Event Listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);